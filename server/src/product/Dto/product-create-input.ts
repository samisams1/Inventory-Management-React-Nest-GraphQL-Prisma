import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  categoryId: number;
  
 
}