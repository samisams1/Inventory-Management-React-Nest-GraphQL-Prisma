import { Category } from 'src/category/category.entity';
export declare class Product {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
    categoryId: number;
}
