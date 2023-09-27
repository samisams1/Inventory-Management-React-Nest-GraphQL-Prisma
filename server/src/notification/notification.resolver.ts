import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from './Dto/notification.dto';


@Resolver()
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => Boolean)
  async sendNotification(
    @Args('recipientId') recipientId: number,
    @Args('message') message: string,
    @Args('soundUrl') soundUrl: string,
  ): Promise<boolean> {
    return this.notificationService.sendNotification(recipientId, message, soundUrl);
  }

  @Subscription(() => Notification)
  notification(): AsyncIterator<Notification> {
    return this.notificationService.pubSub.asyncIterator('notification');
  }
}