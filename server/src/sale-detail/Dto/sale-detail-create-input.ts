import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateSaleDetailInput {
   
    @Field()
    quantity: number;
  
    @Field()
    productId: number;
     
    @Field()
    price:number
  
    @Field()
    amount:number
  
 


}