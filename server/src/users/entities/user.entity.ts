import { ObjectType, Field, Int } from '@nestjs/graphql';
import { RoleEnum } from '@prisma/client';

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
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  role: RoleEnum;

  @Field()
  status: String;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}