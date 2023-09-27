import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationResolver } from './notification.resolver';

@Module({
  providers: [NotificationService, NotificationResolver]
})
export class NotificationModule {}
