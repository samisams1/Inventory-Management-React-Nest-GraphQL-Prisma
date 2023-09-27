import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Product } from "src/product/product.entity";
import { User } from "src/users/entities/user.entity";

@ObjectType()
export class saleDetail {
  @Field()
  id: number;

  @Field(()=>Int)
  saleId: number;

  @Field()
  quantity: number;

  @Field()
  productId: number;
   
  @Field()
  price:number

  @Field()
  amount:number

  @Field()
  product:Product

  @Field()
  seller:User

  @Field()
  createdAt:Date
}
