import { Field, Float, ID, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateProductInput{
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  categoryId: number;

}
@InputType()
export class UpdateProductPriceInput{

  @Field(() => Float)
  price: number;

}