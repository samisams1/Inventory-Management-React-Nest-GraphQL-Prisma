import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Category } from 'src/category/category.entity';

@ObjectType()
export class product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  categoryId: number;

  @Field()
  description: string;

  @Field()
  code: string;

  @Field()
  image: string;

  @Field()
  createdAt: Date;
  
  @Field(() => Category)
  category: Category;

  @Field()
  updatedAt: Date;
}
 

  