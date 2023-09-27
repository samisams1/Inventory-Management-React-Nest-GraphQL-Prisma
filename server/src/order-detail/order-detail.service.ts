import { Injectable } from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
import { Prisma, PrismaClient, Product } from '@prisma/client';
import { CreateOrderDetailInput } from './Dto/create-order-detail.input';
import { UpdateOrderDetailInput } from './Dto/update-order-detail.input';






@Injectable()
export class OrderDetailService {
    private prisma :PrismaClient

    constructor(){
        this.prisma = new PrismaClient();
    }
    async orderDetail(@Args('id') id:number):Promise<Product | null>{
        return this.prisma.product.findUnique({
          where:{id},
          include:{
            category:true
          }});
    }
    async orderDetails(orderId:number){
        return this.prisma.orderDetail.findMany({
          where:{orderId:orderId},
          include:{
          //  products:true,
            order:true,
          }
        });
    }
  /*  async createOrderDetail(createProductDto: CreateOrderDetailInput) {
        const {  quantity } = createProductDto;
        return this.prisma.orderDetail.create({
          data: {
            quantity,
          },
        });
      }*/
     
}
