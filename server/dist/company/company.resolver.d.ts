import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './Dto/create-company.input';
export declare class CompanyResolver {
    private readonly companyService;
    constructor(companyService: CompanyService);
    company(id: number): Promise<Company | null>;
    companies(): Promise<Company[]>;
    createCompany(input: CreateCompanyInput): Promise<Company | null>;
    updateCompany(): Promise<Company[]>;
    deleteCompany(): Promise<Company[]>;
}
