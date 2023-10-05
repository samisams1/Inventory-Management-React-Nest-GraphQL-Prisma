import { Injectable } from '@nestjs/common';
import { PrismaClient, Sale, SaleDetail, Store } from '@prisma/client';
import { saleDetail } from 'src/sale-detail/sale-detail.entity';
import { UpdateStoreInput } from 'src/store/Dto/update-store-input';
import { CreateSaleInput } from './Dto/sale-create-input';
@Injectable()
export class SaleService {
    private prisma :PrismaClient

    constructor(){
        this.prisma = new PrismaClient();
    }
    async sale(id:number):Promise<Sale | null> {
      const sale = await this.prisma.sale.findUnique({
       where:{id:id},
       include:{
        saleDetail:{
          include:{
            product:true,
          }
        }
       }
      });
      return sale;
    }
    async sales():Promise<Sale[]> {
        const sales = await this.prisma.sale.findMany({
         include:{
          seller:true,
            saleDetail:{
                include:{
                    product:true,
                    
                },
            }
         }
        });
    
        return sales;
      }
      async create(createSaleInput: CreateSaleInput): Promise<Sale> {
        const { sellerId, vat, net, grossAmount, status, saleDetail } = createSaleInput;
      
        // Check product availability
        for (const saleItem of saleDetail) {
          const { productId, quantity } = saleItem;

          

          const product = await this.prisma.shopeProduct.findUnique({ where: { id: productId }, include: { product: true }, });
      
          if (!product || product.quantity < quantity) {
            const productName = product ? product.product.name : 'Unknown Product';
            throw new Error(`Insufficient stock for product '${productName}'`);
          }
        }
      
        // Create the sale
        const sale = await this.prisma.sale.create({
          data: {
            grossAmount,
            vat,
            sellerId,
            net,
            status,
            saleDetail: {
              create: saleDetail.map((oDetail) => ({
                amount: oDetail.amount,
                quantity: oDetail.quantity,
                productId: oDetail.productId,
                price: oDetail.price,
              })),
            },
          },
          include: {
            saleDetail: {
              include: {
                product: true
              }
            },
          },
        });
      
        // Update the ShopeProduct for each product
        for (const saleItem of sale.saleDetail) {
          const { productId, quantity } = saleItem;
          await this.prisma.shopeProduct.update({
            where: { id: productId },
            data: { quantity: { decrement: quantity } }
          });
        }
      
        return sale;
      }
      async acceptProductFromSale(input: UpdateStoreInput[]): Promise<Store[]> {
        const updatedShopess: Store[] = [];
        for (const updateInput of input) {
          const { orderId, products } = updateInput;
      
          for (const productInput of products) {
            const { productId, quantity } = productInput;
      
            // Get the product details
            const product = await this.prisma.product.findUnique({
              where: { id: productId },
            });
            const updatedShope = await this.prisma.shopeProduct.updateMany({
              where: { productId: productId },
              data: { quantity: { increment: quantity } },
            });
    
            // Update the order status
            const updatedOrder = await this.prisma.order.updateMany({
              where: { id: orderId },
              data: { status: "accepet" },
            });
         
          }
        }
      
        return updatedShopess;
      }
    async saleDetail() {
      const sales = await this.prisma.saleDetail.findMany({
       include:{
        product:true
       }
      });
  
      return sales;
    }
    async saleDetailBySellId(id:number):Promise<SaleDetail[]> {
      const sales = await this.prisma.saleDetail.findMany({
        where:{saleId:id},
       include:{
        product:true,
       }
      });
  
      return sales;
    }
   /* async update(createSaleInput: CreateOrderInput): Promise<Order> {
        const { totalQuantity, sellerId,orderDetails,status } = createSaleInput;
      
        return this.prisma.order.create({
          data: {
            totalQuantity,
            status,
            sellerId,
            orderDetails: {
              create: orderDetails.map((orderDetail) => ({

                quantity: orderDetail.quantity,
                productId: orderDetail.productId,

              })),
            },
          },
          include: {
            orderDetails: {
                include:{
                    product:true
                }
            },
          },
        });
    } */
    async sumTheGross() {
      const sumGross = async () => {
        try {
          const orders = await this.prisma.sale.findMany();
          let sum = 0;
          for (const order of orders) {
            sum += order.grossAmount; 
          }
          return sum;
        } catch (error) {
          // Handle any errors that occur during the calculation
          throw new Error('An error occurred while calculating total sales.');
        }
      };
    
      return sumGross();
    }
    async saleTotalProduct() {
      const calculateTotalSales = async () => {
        try {
          const orders = await this.prisma.shopeProduct.findMany();
          const sum = orders.reduce((acc, order) => acc + order.quantity, 0);
          return sum;
        } catch (error) {
          // Handle any errors that occur during the calculation
          throw new Error('An error occurred while calculating total sales.');
        }
      };
    
      return calculateTotalSales();
    }
}

