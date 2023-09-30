import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { ChangePasswordInput, CreateUserInput } from './dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { UpdateUserInput } from './dto/update-user.input';


@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { nullable: true })
  async user(@Args('id', { type: () => Int }) id: number): Promise<User | null> {
    return this.usersService.user(id);
  }

  @Query(() => [User])
  @UseGuards(GqlAuthGuard, RolesGuard)
  async users(): Promise<User[]> {
    const users = await this.usersService.users();
    return users;
  }

  @Mutation(() => User)
  async createUser(@Args('input') createUserDto: CreateUserInput): Promise<User> {
    const user = await this.usersService.create(createUserDto);
    return user;
  }
  @Mutation(() => User)
  async updateUser(@Args('id', { type: () => Int }) id: number,@Args('input') input:UpdateUserInput): Promise<User | null> {
    const user = await this.usersService.update(id,input);
    return user;
  }
  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    const user = await this.usersService.delete(id);
    return user;
  }

  @Query(() => Int)
  async countUsers(): Promise<number> {
    const count = await this.usersService.totalUsers();
    return count;
  }

  @Mutation(() => User)
  async changePassword(
    @Args('userId') userId:number,
    @Args('changePasswordInput') changePasswordInput: ChangePasswordInput,
  ): Promise<User> {
    return this.usersService.changePassword(userId, changePasswordInput);
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Args('email') email: string): Promise<boolean> {
    return this.usersService.forgotPassword(email);
  }
 /* @Mutation(() => String)
  async uploadAvatar(
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<string> {
    return this.usersService.uploadAvatar(file);
  } */
}