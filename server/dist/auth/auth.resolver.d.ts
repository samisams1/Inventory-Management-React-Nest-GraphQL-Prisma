import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { User } from 'src/users/entities/user.entity';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    login(input: LoginInput): Promise<string>;
    me(user: User): Promise<User>;
}
