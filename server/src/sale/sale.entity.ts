import { Field, ObjectType } from "@nestjs/graphql";
import { saleDetail } from "src/sale-detail/sale-detail.entity";
import { User } from "src/users/entities/user.entity";

@ObjectType()
export class sale{
@Field()
id:number;

@Field()
sellerId:number;

@Field()
vat:number;

@Field()
net:number;

@Field()
grossAmount:number;

@Field()
status:string;

@Field(() => [saleDetail])
saleDetail: saleDetail[];

@Field(() => [User])
seller: User[];


@Field()
createdAt:Date;
}


