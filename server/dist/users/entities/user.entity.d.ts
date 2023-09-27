import { RoleEnum } from '@prisma/client';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: RoleEnum;
    createdAt: Date;
    updatedAt: Date;
}
