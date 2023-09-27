import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateShopeProductInput{
@Field()
quantity:number;

@Field(()=>Int)
productId:number

@Field(()=>Int)
storeId:number

@Field(()=>Int)
userId:number
}
