import { InputType, Field, registerEnumType } from '@nestjs/graphql';





@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

}

@InputType()
export class ChangePasswordInput {
  @Field()
  currentPassword: string;

  @Field()
  newPassword: string;
}