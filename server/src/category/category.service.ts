import { Injectable } from '@nestjs/common';
import { Company, Prisma, PrismaClient } from '@prisma/client';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient();
    }
    async category(id:number):Promise<Category | null>{
        return this.prisma.category.findUnique({where:{id}})
    }
    async categories():Promise<Category[]>{
        return this.prisma.category.findMany();
    }
    async cretae(data:Prisma.CategoryCreateInput):Promise<Category | null>{
        return this.prisma.category.create({
            data: {
                name: data.name,
              },
        });
    }
    
    async update(id:number,data:Prisma.CategoryUpdateInput):Promise<Category | null>{
        return this.prisma.category.update({where:{id},data})
    }
    async delete(id:number):Promise<Category | null>{
       return this.prisma.category.delete({where:{id}})
    }
}
