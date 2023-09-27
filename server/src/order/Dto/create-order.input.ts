import {Field, ID, InputType } from '@nestjs/graphql';
import { CreateOrderDetailInput } from 'src/order-detail/Dto/create-order-detail.input';
@InputType()
export  class CreateOrderInput {
  @Field()
  sellerId: number;

  @Field()
  totalQuantity: number;

  @Field()
  status: string;

  @Field(() => [CreateOrderDetailInput])
  orderDetails: CreateOrderDetailInput[]; 


}




