/*import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Product } from "src/product/product.entity";

@ObjectType()
export class Category {
    @Field(()=>Int)
    id:number;

    @Field()
    name:string;

    @Field(() => [Product], { nullable: true })
    product?: Product[]

    
}*/
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { product } from '../product/product.entity';

@ObjectType()
export class Category {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;


}