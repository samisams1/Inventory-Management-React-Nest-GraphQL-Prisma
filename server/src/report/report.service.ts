import { Injectable } from '@nestjs/common';
import { PrismaClient, Sale, SaleDetail } from '@prisma/client';
@Injectable()
export class ReportService {
    private prisma :PrismaClient

    constructor(){
        this.prisma = new PrismaClient();
    }
    async saleReportByYear1(id:number):Promise<Sale[] | null> {
      const sale = await this.prisma.sale.findMany({
     //  where:{id:id},
       include:{
        saleDetail:{
          include:{
            product:true,
          }
        }
       }
      });
      return sale;
    }
  
    async saleReportByYear():Promise<Sale[]> {
        const sales = await this.prisma.sale.findMany({
         include:{
          seller:true,
            saleDetail:{
                include:{
                    product:true,
                    
                },
            }
         }
        });
    
        return sales;
      }
      async saleReportByMonth():Promise<Sale[]> {
        const sales = await this.prisma.sale.findMany({
         include:{
          seller:true,
            saleDetail:{
                include:{
                    product:true,
                    
                },
            }
         }
        });
    
        return sales;
      }
      async saleReportByDay():Promise<Sale[]> {
        const sales = await this.prisma.sale.findMany({
         include:{
          seller:true,
            saleDetail:{
                include:{
                    product:true,
                    
                },
            }
         }
        });
    
        return sales;
      }
    async saleDetail() {
      const sales = await this.prisma.saleDetail.findMany({
       include:{
        product:true
       }
      });
  
      return sales;
    }
    async saleDetailBySellId(id:number):Promise<SaleDetail[]> {
      const sales = await this.prisma.saleDetail.findMany({
        where:{saleId:id},
       include:{
        product:true,
       }
      });
  
      return sales;
    }
    async sumTheGross() {
      const sumGross = async () => {
        try {
          const orders = await this.prisma.sale.findMany();
          let sum = 0;
          for (const order of orders) {
            sum += order.grossAmount; 
          }
          return sum;
        } catch (error) {
          // Handle any errors that occur during the calculation
          throw new Error('An error occurred while calculating total sales.');
        }
      };
    
      return sumGross();
    }
    async saleTotalProduct() {
      const calculateTotalSales = async () => {
        try {
          const orders = await this.prisma.shopeProduct.findMany();
          const sum = orders.reduce((acc, order) => acc + order.quantity, 0);
          return sum;
        } catch (error) {
          // Handle any errors that occur during the calculation
          throw new Error('An error occurred while calculating total sales.');
        }
      };
    
      return calculateTotalSales();
    }
}

