/*import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from 'src/category/category.entity';
import { CreateProductInput } from './Dto/product-create-input';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
    constructor(private readonly productService:ProductService){}
    @Query(()=>[Product])
    async products():Promise<Product[]>{
        return this.productService.products();
    }*//*
    @Mutation(()=>Product)
   async createCategory(@Args('data') data:CreateProductInput):Promise<Product |null>{
    const createProduct = await this.productService.create(data);
    return createProduct;
  } 
}
*/
import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { CreateProductInput } from './Dto/product-create-input';
import {  UpdateProductInput, UpdateProductPriceInput } from './Dto/product-update-input';
import { product } from './product.entity';
import { ProductService } from './product.service';
import { Prisma, PrismaClient, Product } from '@prisma/client';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}
  
  @Query(()=>product)
  async product(@Args('id', { type: () => Int }) id: number) {
    return this.productService.product(id);
  }
  //@Query(()=>[Product])
 // @UseGuards(GqlAuthGuard,RolesGuard)
 @Query(()=>[product])
  async products() {
    return this.productService.products();
  }
  @Mutation(() => product)
  async createProduct(
    @Args('input') createProductDto: CreateProductInput,
  ): Promise<Product | null> {
    return this.productService.createProduct(createProductDto);
  }
  @Mutation(()=>product)
  async updateProduct(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update(id, updateProductInput);
  }

 /* @Mutation(()=>product)
  async deleteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.delete(id);
  }*/
  @Query(()=>Number)
  async countProducts() {
    return this.productService.countProducts();
  }
  @Mutation(()=>product)
  async updateProductPrice(@Args('id',{type:()=>Int}) id:number,@Args('input') input:UpdateProductPriceInput) {
  const product =  await  this.productService.updatePrice(id,input);
  return product;
  } 
}