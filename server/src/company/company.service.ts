import { Injectable } from '@nestjs/common';
import { Company, Prisma, PrismaClient, } from '@prisma/client';

@Injectable()
export class CompanyService {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient();
    }
    async company(id:number):Promise<Company |null>{
        return this.prisma.company.findUnique({where:{id}});
    }
    async companies():Promise<Company[]>{
        return this.prisma.company.findMany();
    }
    async create(input:Prisma.CompanyCreateInput):Promise<Company | null>{
        return  this.prisma.company.create({
            data:{
                name:   input.name,
                address:input.address,
            }
        })
    }
   /* async update(id:number,data:Prisma.SaleUpdateInput):Promise<Company | null>{
        return  this.prisma.company.update({where:{id},data})
    }
    async delete(id:number):Promise<Company | null>{
        return this.prisma.company.delete({where:{id}})
    }*/

}


