 import { Injectable } from '@nestjs/common';
import { Order, PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { CreateOrderInput } from './Dto/create-order.input';
import { order } from './order.entity';
@Injectable()
export class OrderService {
    private prisma :PrismaClient
    private pubSub = new PubSub();

    constructor(){
        this.prisma = new PrismaClient();
    }
    async order(id:number):Promise<Order | null> {
      const order = await this.prisma.order.findUnique({
       where:{id:id},
       include:{
        orderDetails:{
          include:{
            product:true,
          }
        }
       }
      });
      return order;
    }
    async getOrderDetails():Promise<Order[]> {
        const orders = await this.prisma.order.findMany({
         include:{
            seller:true,
            orderDetails:{
                include:{
                    product:true,
                }
            },
         },
          orderBy: {
      createdAt: 'desc'
    }
        });
    
        return orders;
      }
      async createOrder(createSaleInput: CreateOrderInput): Promise<Order> {
        const { totalQuantity, sellerId, orderDetails, status } = createSaleInput;
      
        const insufficientProducts: string[] = [];
      
        // Check the quantity available in the store for each product
        for (const orderDetail of orderDetails) {
          const { productId, quantity } = orderDetail;
      
          const store = await this.prisma.store.findUnique({
            where: { id: productId },
            include: { product: true },
          });
      
          if (!store || store.quantity < quantity) {
            const productName = store && store.product ? store.product.name : `Product with ID: ${productId}`;
            insufficientProducts.push(`${productName} (Available quantity: ${store?.quantity}, Requested quantity: ${quantity})`);
          }
        }
      
        if (insufficientProducts.length > 0) {
          const errorMessage = `Insufficient quantity in store for the following products:\n${insufficientProducts.join("\n")}`;
          throw new Error(errorMessage);
        }
      
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
              include: {
                product: true,
              },
            },
          },
        });
      }
    async update(createSaleInput: CreateOrderInput): Promise<Order> {
        const { totalQuantity, sellerId,orderDetails,status } = createSaleInput;
      
        return this.prisma.order.create({
          data: {
            totalQuantity,
            status:"mimi",
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
    }
    async incrementCount() {
      const count = await this.prisma.order.count();
      this.pubSub.publish('COUNT_UPDATED', { countUpdated: count });
    }
   /* async createOrder(input: CreateOrderInput): Promise<Order> {
        const { sellerId, totalQuantity, status, orderDetails } = input;
    
        const createdOrder = await this.prisma.order.create({
          data: {
            sellerId,
            totalQuantity,
            status,
            orderDetails: {
              create: orderDetails.map((orderDetail) => ({
                quantity: orderDetail.quantity,
                productId: orderDetail.productId,
              })),
            },
          },
          include: {
            orderDetails: {
              include: {
                product: true,
              },
            },
          },
        });
    
        return createdOrder;
      }
     */
      async countOrders() {
        const countOrders = async () => {
          try {
            const count = await this.prisma.order.count({where:{status:"pending"}});
            return count;
          } catch (error) {
            // Handle any errors that occur during the count operation
            throw new Error('An error occurred while counting products.');
          }
        };
      
        return countOrders();
      }
}

