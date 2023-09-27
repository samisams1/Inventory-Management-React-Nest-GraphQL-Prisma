import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Product } from "src/product/product.entity";

@ObjectType()
export class store {
@Field()
id:number;

@Field(()=>Int)
quantity:number;

@Field()
product:Product
}

