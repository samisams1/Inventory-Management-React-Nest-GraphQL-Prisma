import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class SendNotificationInput {
  @Field()
  recipientId: number;

  @Field()
  message: string;

  @Field()
  soundUrl: string;
}

@ObjectType()
export class Notification {
  @Field()
  recipientId: number;

  @Field()
  message: string;

  @Field()
  soundUrl: string;
}