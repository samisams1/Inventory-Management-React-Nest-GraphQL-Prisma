import { Injectable } from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
import { Prisma, PrismaClient, Product, } from '@prisma/client';
import { CreateProductInput } from './Dto/product-create-input';
import { UpdateProductInput, UpdateProductPriceInput } from './Dto/product-update-input';
import { product } from './product.entity';


@Injectable()
export class ProductService {
    private prisma :PrismaClient

    constructor(){
        this.prisma = new PrismaClient();
    }
    async product(@Args('id') id:number):Promise<product | null>{
        return this.prisma.product.findUnique({
          where:{id},
          include:{
            category:true
          }});
    }
    async products(){
        return this.prisma.product.findMany({
          include:{
            category:true
          }
        });
    }
    async createProduct(data: CreateProductInput): Promise<Product | null> {
      const { name, price, categoryId } = data;
    
      try {
        const product = await this.prisma.product.create({
          data: {
            name,
            price,
            categoryId,
            description: "yto",
            code: "1452ddd",
            image: 'product'
          },
        });
        const shopeProduct = await this.prisma.shopeProduct.create({
          data: {
            quantity: 0,
            productId: product.id,
            userId: 1
          }
        });
        const store = await this.prisma.store.create({
          data: {
            quantity: 0,
            productId: product.id,
            userId: 1
          }
        });
        return product;
      } catch (error) {
        console.error('Error creating product:', error);
        return null;
      }
    }
   /* async createProduct(createProductDto: CreateProductInput): Promise<{ product: product } | null> {
      const { name, price, categoryId } = createProductDto;
      try {
        const product = await this.prisma.product.create({
          data: {
            name,
            price,
            categoryId,
            description: "yto",
            code: "1452ddd",
            image: 'product'
          },
        });
    
        const shopeProduct = await this.prisma.shopeProduct.create({
          data: {
            quantity: 0,
            productId: product.id,
            userId: 1
          }
        });
    
        const store = await this.prisma.store.create({
          data: {
            quantity: 0,
            productId: product.id,
            userId: 1
          }
        });
    
        return {
          product,
        };
      } catch (error) {
        console.error('Error creating product:', error);
        throw new Error('Failed to create product');
      }
    }  */
      async update(id: number, updateProductDto: UpdateProductInput) {
        const { name, price, categoryId } = updateProductDto;
    
        return this.prisma.product.update({
          where: {
            id,
          },
          data: {
            name,
            price,
            categoryId,
          },
        });
      }
    /*async delete(@Args('id',{type:()=>Int}) id:number):Promise<product | null>{
        return this.prisma.product.delete({where:{id}});
    }*/
    async countProducts() {
      const countProducts = async () => {
        try {
          const count = await this.prisma.product.count();
          return count;
        } catch (error) {
          // Handle any errors that occur during the count operation
          throw new Error('An error occurred while counting products.');
        }
      };
    
      return countProducts();
    }
    async updatePrice(id: number, updateProductDto: UpdateProductPriceInput) {
      const { price } = updateProductDto;
      return this.prisma.product.update({
        where: {id},
        data: {price:price},
      });
    }
  
}
