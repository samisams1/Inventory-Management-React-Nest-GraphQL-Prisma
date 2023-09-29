import { Field, Int, ObjectType } from "@nestjs/graphql";
import { product } from "src/product/product.entity";

@ObjectType()
export class store {
@Field()
id:number;

@Field(()=>Int)
quantity:number;

@Field()
product:product
}

