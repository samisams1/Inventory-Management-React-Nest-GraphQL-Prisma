/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  const server = createServer(app.getHttpAdapter().getInstance());
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);

    socket.on('disconnect', () => {
      console.log('A client disconnected:', socket.id);
    });
  });

  await app.listen(5000, () => {
    console.log('Nest application is running on port 5000');
  });

  const gqlSchemaHost = app.get(GraphQLSchemaHost);

  SubscriptionServer.create(
    {
      schema: gqlSchemaHost.schema,
      execute,
      subscribe,
    },
    {
      server: server,
      path: '/subscriptions',
    }
  );
}

bootstrap();
*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const httpServer = createServer(app.getHttpAdapter().getInstance());
  const io = new Server(httpServer);

  const subscriptionServer = SubscriptionServer.create(
    {
      execute,
      subscribe,
      schema: app.get('GqlSchema'),
    },
    {
      server: httpServer,
      path: '/subscriptions',
    },
  );

  await app.listen(5000, () => {
    console.log('Nest application is running on port 5000');
  });

  // Gracefully shutdown the WebSocket subscription server
  const shutdownSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];
  shutdownSignals.forEach((signal) => {
    process.on(signal, () => {
      subscriptionServer.close();
      process.exit(0);
    });
  });
}

bootstrap();