import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateCategoryInput {
@Field()
name:string;
}