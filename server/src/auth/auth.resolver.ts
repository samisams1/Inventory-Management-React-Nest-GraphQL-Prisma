import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common'
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { GqlAuthGuard } from './gql-auth-guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async login(@Args('input') input: LoginInput): Promise<string> {
    const user = await this.authService.validateUser(input.username, input.password);
    if (user) {
      return this.authService.login(user);
    }
   throw new NotFoundException('User not found');
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}