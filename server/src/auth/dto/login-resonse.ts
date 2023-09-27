import { InputType, Field } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class LoginResponse {
  @Field()
  access_token: string;


  @Field()
  user: User;
}
