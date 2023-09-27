import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '.prisma/client';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<User | null>;
    login(user: User): Promise<string>;
    getCurrentUser(userId: number): Promise<User | null>;
}
