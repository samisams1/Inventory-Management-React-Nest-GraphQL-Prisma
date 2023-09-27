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
import { CreateOrderDetailInput } from './Dto/create-order-detail.input';
import { OrderDetailService } from './order-detail.service';
import { OrderDetail } from './orderDetail.entity';

@Resolver()
export class OrderDetailResolver {
  constructor(private orderDetailService: OrderDetailService) {}
  
  @Query(()=>OrderDetail)
  async orderDetail(@Args('id', { type: () => Int }) id: number) {
    return this.orderDetailService.orderDetail(id);
  }
  @Query(()=>[OrderDetail])
  @UseGuards(GqlAuthGuard,RolesGuard)
  async orderDetails(@Args('orderId',{type :()=>Int}) orderId:number) {
    return this.orderDetailService.orderDetails(orderId);
  }
  /*@Mutation(()=>OrderDetail)
  async createOrderDetail(@Args('input') createProductDto: CreateOrderDetailInput) {
    return this.orderDetailService.createOrderDetail(createProductDto);
  }*/
}
