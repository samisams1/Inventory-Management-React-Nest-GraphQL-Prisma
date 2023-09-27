import { User } from '@prisma/client';
import { MemcachedService } from '../memcached/memcached.service';
import { CreateUserInput } from './dto/create-user.input';
export declare class UsersService {
    private prisma;
    private readonly memcachedService;
    constructor(memcachedService: MemcachedService);
    users(): Promise<User[]>;
    user(id: number): Promise<User | null>;
    create(input: CreateUserInput): Promise<User>;
    update(id: number, updateStoreDto: CreateUserInput): Promise<User>;
    delete(id: number): Promise<User>;
}
