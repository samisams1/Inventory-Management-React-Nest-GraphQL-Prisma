import { Field, InputType, Int } from "@nestjs/graphql";
import { product } from "src/product/product.entity";

@InputType()
export class CreateOrderDetailInput{

    @Field()
    quantity: number;
  
    @Field()
    productId: number;


}


