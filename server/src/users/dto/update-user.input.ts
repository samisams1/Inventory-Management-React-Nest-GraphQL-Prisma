import { InputType, Field, registerEnumType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  role?: EnumRole;

  @Field({ nullable: true })
  status?: StatusEnum;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  password?: string;
}

@InputType()
export class ChangePasswordInput {
  @Field()
  currentPassword: string;

  @Field()
  newPassword: string;
}

export enum EnumRole {
  ADMIN = 'ADMIN',
  USER = 'STORE',
  GUEST = 'SELLER',
}
export enum StatusEnum {
  active = 'active',
  disabled = 'disabled',
  pending = 'pending',
}
registerEnumType(EnumRole, {
  name: 'EnumRole',
  
});
registerEnumType(StatusEnum, {
  name: 'StatusEnum',
});