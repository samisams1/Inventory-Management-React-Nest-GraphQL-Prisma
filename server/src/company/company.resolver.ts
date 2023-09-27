import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './Dto/create-company.input';

@Resolver()
export class CompanyResolver {
    constructor(private readonly companyService:CompanyService){}
 @Query(() => Company)
 async company (@Args('id',{type:()=>Int}) id:number): Promise<Company | null> {
   const company = await this.companyService.company(id);
   return company; 
 }
 @Query(() => [Company])
 async companies(): Promise<Company[]> {
   const company = await this.companyService.companies();
   return company; 
 }
 @Mutation(() => Company)
 async createCompany(@Args('input') input:CreateCompanyInput): Promise<Company | null> {
   const company = await this.companyService.create(input);
   return company; 
 }
 
 @Mutation(() => String)
 async updateCompany(): Promise<Company[]> {
   const company = await this.companyService.companies();
   return company; 
 }
 @Mutation(() => Company)
 async deleteCompany(): Promise<Company[]> {
   const company = await this.companyService.companies();
   return company; 
 }
}
