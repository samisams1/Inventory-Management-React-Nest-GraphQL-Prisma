import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { OrderDetail } from 'src/order-detail/orderDetail.entity';
import { User } from 'src/users/entities/user.entity';
@ObjectType()
export class order {
  @Field(()=>Int)
  id: number;

  @Field()
  sellerId: number;

  @Field()
  totalQuantity: number;

  @Field()
  status: string;

  @Field(() => [OrderDetail])
  orderDetails: OrderDetail[];

  @Field(() => [User])
  seller: User[];

  @Field()
  createdAt:Date

 

}