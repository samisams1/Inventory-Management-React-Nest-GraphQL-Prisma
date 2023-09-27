import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { Order } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { CreateOrderInput } from './Dto/create-order.input';
import { order } from './order.entity';
import { OrderService } from './order.service';

@Resolver()
export class OrderResolver {
  constructor(private orderService: OrderService) {}
  private pubSub = new PubSub();

  @Mutation(()=>order)
  async createOrder(@Args('input') createProductDto: CreateOrderInput) {
    return this.orderService.createOrder(createProductDto);
  }
  @Query(()=>[order])
  @UseGuards(GqlAuthGuard,RolesGuard)
  async orders():Promise<Order[]> {
    return this.orderService.getOrderDetails();
  }
  @Query(()=>order)
  async order(@Args('id') id:number):Promise<Order | null>{
  return this.orderService.order(id);
  }

  @Subscription(() => Int)
  countUpdated() {
    return this.pubSub.asyncIterator('COUNT_UPDATED');
  }

  @Query(()=>Number)
  async countOrder() {
    return this.orderService.countOrders();
  }

}

