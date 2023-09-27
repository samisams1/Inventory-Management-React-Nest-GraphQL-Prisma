import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './Dto/create-category.input';
import { UpdateCategoryInput } from './Dto/update-category.input';
export declare class CategoryResolver {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    category(id: number): Promise<Category | null>;
    categories(): Promise<Category[]>;
    createCategory(data: CreateCategoryInput): Promise<Category | null>;
    updateCategory(id: number, data: UpdateCategoryInput): Promise<Category | null>;
    deleteCategory(id: number): Promise<Category | null>;
}
