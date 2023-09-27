import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateOrderDetailInput{
@Field()
name:string;
}