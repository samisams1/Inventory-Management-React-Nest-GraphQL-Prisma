import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    user(id: number): Promise<User | null>;
    users(): Promise<User[]>;
    createUser(createUserDto: CreateUserInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
