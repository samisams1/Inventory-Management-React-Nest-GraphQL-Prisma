import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Product } from "src/product/product.entity";

@ObjectType()
export class OrderDetail {
  @Field()
  id: number;

  @Field()
  orderId: number;

  @Field()
  quantity: number;

  @Field()
  productId: number;


  @Field()
    product:Product
}
