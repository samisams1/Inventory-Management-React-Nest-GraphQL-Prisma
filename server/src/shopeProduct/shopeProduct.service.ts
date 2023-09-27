import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, ShopeProduct } from '@prisma/client';
import { CreateShopeProductInput } from './Dto/create-shope-product-input';

@Injectable()
export class ShopeProductService {
  private prisma: PrismaClient
  constructor() {
      this.prisma = new PrismaClient();
  }
  async Sale(id:number):Promise<ShopeProduct | null>{
    return this.prisma.shopeProduct.findUnique({where:{id}})
  }
  async Sales():Promise<ShopeProduct[]>{
    return this.prisma.shopeProduct.findMany({
      include:{
       product:true,
        //store:true,
        user:true
      }
    })
  }
  async create(createSaleInput:CreateShopeProductInput):Promise<ShopeProduct>{
    const {quantity,storeId,productId,userId} =createSaleInput;
    return this.prisma.shopeProduct.create({
      data:{
      quantity,
      userId,
     // storeId,
      productId
    }});
  }
  async update(id:number,data:Prisma.ShopeProductUpdateInput):Promise<ShopeProduct | null>{
    return this.prisma.shopeProduct.update({where:{id},data})
  }
  async delete(id:number):Promise<ShopeProduct  | null>{
    return this.prisma.shopeProduct.delete({where:{id}})
  }
}
