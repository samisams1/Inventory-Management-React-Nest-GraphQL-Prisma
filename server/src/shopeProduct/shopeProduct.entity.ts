import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { product } from "src/product/product.entity";
import { store } from "src/store/store.entity";
import { User } from "src/users/entities/user.entity";

@ObjectType()
export class shopeProduct{
    @Field()
id:number;

@Field()
quantity:number;

@Field()
product:product
   /* @Field(()=>Int)
    id: number;

    @Field(()=>Int)
    quantity:number;
    
    @Field(()=>ID)
    productId:number

    @Field(()=>ID)
    storeId:number

    @Field(()=>ID)
    userId:number

    @Field()
    store:store

    @Field()
    product:Product

    @Field()
    user:User*/
}


