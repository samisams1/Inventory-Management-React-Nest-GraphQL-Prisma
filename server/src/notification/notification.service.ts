import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { Notification } from './Dto/notification.dto';

@Injectable()
export class NotificationService {
  public pubSub: PubSub;
  private prisma :PrismaClient


  constructor(){
    this.prisma = new PrismaClient();
    this.pubSub = new PubSub();

}
  async sendNotification(recipientId: number, message: string, soundUrl: string): Promise<boolean> {
    const recipient = await this.prisma.user.findUnique({ where: { id: recipientId } });

    if (recipient) {
      // Logic for sending the notification (e.g., push notification, WebSocket event, etc.)
      console.log(`Sending notification to recipient: ${recipient.username}`);
      console.log(`Message: ${message}`);
      console.log(`Sound URL: ${soundUrl}`);

      const notification: Notification = {
        recipientId: recipient.id,
        message,
        soundUrl,
      };

      this.pubSub.publish('notification', { notification });

      return true;
    }

    return false;
  }
}