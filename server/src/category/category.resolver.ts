import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth-guard';
import { RolesGuard } from 'src/auth/guards/roles.gurd';
import { Company } from 'src/company/company.entity';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './Dto/create-category.input';
import { UpdateCategoryInput } from './Dto/update-category.input';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => Category)
  @UseGuards(GqlAuthGuard,RolesGuard)
  async category(@Args('id',{type:()=>Int}) id:number): Promise<Category | null>  {
    const categories = await this.categoryService.category(id);
    return categories; 
  }
  @Query(()=>[Category])
  @UseGuards(GqlAuthGuard,RolesGuard)
  async categories():Promise<Category[]>{
    const category= await this.categoryService.categories();
    return category;
  }
  @Mutation(()=>Category)
  async createCategory(@Args('data') data:CreateCategoryInput):Promise<Category | null>{
    const createCategory = await this.categoryService.cretae(data);
    return createCategory;
  }
  @Mutation(()=>Category)
  async updateCategory(@Args('id',{type:()=>Int}) id:number, data:UpdateCategoryInput):Promise<Category | null>{
    const updateCategory = await this.categoryService.update(id,data);
    return updateCategory;
  }
  @Mutation(()=>Category)
  async deleteCategory(@Args('id',{type:()=>Int}) id:number):Promise<Category | null>{
    const deleteCategory =await this.categoryService.delete(id);
    return  deleteCategory;
  }
}