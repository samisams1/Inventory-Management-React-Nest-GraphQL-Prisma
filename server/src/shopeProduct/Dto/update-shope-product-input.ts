import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateShopeProductInput{
    @Field(()=>Int)
    id: number;

    @Field(()=>Int)
    quantity:number;
    
    @Field(()=>Int)
    productId:number

}