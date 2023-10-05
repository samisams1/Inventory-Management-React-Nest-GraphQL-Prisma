import { Query, Resolver } from '@nestjs/graphql';
import { Sale } from '@prisma/client';
import { sale } from 'src/sale/sale.entity';
import { ReportService } from './report.service';


@Resolver()
export class ReportResolver {
  constructor(private reportService: ReportService) {}
    @Query(()=>[sale])
    async dailyReport():Promise<Sale[]> {
      return this.reportService.saleReportByDay();
    }
    @Query(()=>sale)
    async monthReport():Promise<Sale[]> {
        return this.reportService.saleReportByMonth();
    }
    @Query(()=>sale)
    async yearReport():Promise<Sale[]> {
        return this.reportService.saleReportByYear();
    }
    
 
}