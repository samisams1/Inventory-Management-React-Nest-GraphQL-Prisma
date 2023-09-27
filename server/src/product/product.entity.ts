import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { Category } from 'src/category/category.entity';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Category)
  category: Category;

  @Field(() => ID)
  categoryId: number;
}