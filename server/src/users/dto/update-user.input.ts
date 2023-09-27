import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;
  @Field()
  companyId:number;


  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  resetToken: string;

  @Field()
  updatedAt: Date;

}
