import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "src/users/entities/user.entity";
@ObjectType()
export class Company {
   @Field(()=>Int)
   id: number

   @Field()
   name:string;

   @Field()
   address:string;

   @Field(() => [User], { nullable: true })
   eemployees?: User[];

   @Field()
   createdAt:Date;

   @Field()
   updatedAt:Date;


}
