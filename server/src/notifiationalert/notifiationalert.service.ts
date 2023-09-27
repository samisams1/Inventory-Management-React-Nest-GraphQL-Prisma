import { Injectable } from '@nestjs/common';
import { CronJob } from 'cron';
import { PrismaService } from '../prisma/prisma.service';
import * as WebSocket from 'ws';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class NotifiationalertService {
  private cronJob: CronJob;
  private wss: WebSocket.Server;
  private prisma : PrismaClient;
  constructor(){
    this.prisma = new PrismaClient();
}

  startNotificationCronStore() {
    this.cronJob = new CronJob('0 26 8 * * *', async () => {
      try {
        const minimumProduct = await this.prisma.store.findMany({
          where: {
            quantity: {
                lt: 20,
            },
          },
        });

        // Implement your notification logic here
        // For example, send notifications to clients using a messaging service or WebSocket connection
        this.sendNotificationsToClients(minimumProduct);
        console.log('Expired the Product is :', minimumProduct);
      } catch (error) {
        console.error('An error occurred during notification:', error);
      }
    });

    this.cronJob.start();
  }

  private sendNotificationsToClients(minimumProduct: any[]) {
    if (this.wss) {
      this.wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(minimumProduct));
        }
      });
    }
  }

  stopNotificationCron() {
    if (this.cronJob) {
      this.cronJob.stop();
    }
  }
}