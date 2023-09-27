import { Prisma } from '@prisma/client';
import { Category } from './category.entity';
export declare class CategoryService {
    private prisma;
    constructor();
    category(id: number): Promise<Category | null>;
    categories(): Promise<Category[]>;
    cretae(data: Prisma.CategoryCreateInput): Promise<Category | null>;
    update(id: number, data: Prisma.CategoryUpdateInput): Promise<Category | null>;
    delete(id: number): Promise<Category | null>;
}
