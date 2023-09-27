import { Field, InputType, Int } from "@nestjs/graphql";
import { Product } from "src/product/product.entity";

@InputType()
export class CreateStoreInput {
    @Field(()=>Int)
    quantity:number;
    
    @Field(()=>Int)
    productId:number;

    @Field()
    product:Product
}
