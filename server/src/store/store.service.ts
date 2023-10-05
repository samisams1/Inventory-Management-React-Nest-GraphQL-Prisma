import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { PrismaClient, Store } from '@prisma/client';
import { CreateStoreInput } from './Dto/create-store-input';
import { UpdateQuantityInput, UpdateStoreInput } from './Dto/update-store-input';

@Injectable()
export class StoreService {
  private prisma:PrismaClient;
    constructor(){
    this.prisma =new  PrismaClient();
    }
    async store(@Args('id') id:number):Promise<Store | null>{
      return this.prisma.store.findUnique({where:{id}});
  }
    async stores():Promise<Store[]>{
        return this.prisma.store.findMany({
          include:{
            product:true
          }
        });
  }
  async update(input: UpdateStoreInput[]): Promise<Store[]> {
    const updatedStores: Store[] = [];
    const insufficientProducts: string[] = [];
  
    for (const updateInput of input) {
      const { orderId, products } = updateInput;
  
      for (const productInput of products) {
        const { productId, quantity } = productInput;
  
        // Get the product details
        const product = await this.prisma.product.findUnique({
          where: { id: productId },
        });
        // Check if the available quantity in the store is sufficient
        const store = await this.prisma.store.findUnique({
          where: { id: productId },
        });
        if (!store || store.quantity < quantity) {
          insufficientProducts.push(`${product?.name} (Available quantity: ${store?.quantity}, Requested quantity: ${quantity})`);
        } else {
          // Update the store quantity
          const updatedStore = await this.prisma.store.updateMany({
            where: { productId: productId },
            data: { quantity: { decrement: quantity } },
          });
  
          // Update the order status
          const updatedOrder = await this.prisma.order.updateMany({
            where: { id: orderId },
            data: { status: "approved" },
          });
          // Find the affected stores
          const affectedStores = await this.prisma.store.findMany({
            where: { productId: productId },
            include: {
              product: true,
            },
          });
          // Find the affected sales
         /* const affectedSales = await this.prisma.shopeProduct.findMany({
            where: { productId: productId },
            include: {
              product: true,
            },
          });*/
        //  updatedStores.push(...affectedStores);
  
         /* for (const sale of affectedSales) {
            // Update the sale quantity
            const updatedSale = await this.prisma.shopeProduct.update({
              where: { id: sale.id },
              data: { quantity: { increment: quantity } },
            });
  
            // Push the updated sale to the affectedStores array
            updatedStores.push(updatedSale);
          }*/
        }
      }
    }
  
    if (insufficientProducts.length > 0) {
      const errorMessage = `Insufficient quantity in store for the following products:\n${insufficientProducts.join("\n")}`;
      throw new Error(errorMessage);
    }
  
    return updatedStores;
  }
  
  async updateQuantity(id: number, updateProductDto: UpdateQuantityInput) {
    const { quantity } = updateProductDto;
    return this.prisma.store.update({
      where: {id},
      data: {quantity:{increment:quantity}},
    });
  }
  async storeTotalProduct() {
    const calculateTotalStores = async () => {
      try {
        const stores = await this.prisma.store.findMany();
        const sum = stores.reduce((acc, order) => acc + order.quantity, 0);
        return sum;
      } catch (error) {
        // Handle any errors that occur during the calculation
        throw new Error('An error occurred while calculating total sales.');
      }
    };
  
    return calculateTotalStores();
  }

}
