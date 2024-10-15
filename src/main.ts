import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import RedisStore from 'connect-redis';
import Redis from 'ioredis';

const redisClient = new Redis({
  host: 'localhost',
  port: 6379,
});

/* @Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: 'your-secret-key',
          resave: false,
          saveUninitialized: false,
        }),
      )
      .forRoutes('*');
  }
} */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //Hacerlo Feature Flag - ver si conviene meterlo en el AppModule directamente
  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
      }),
      secret: 'my-secret', //TODO .env variable
      resave: false,
      saveUninitialized: false,
    }),
  );
  await app.listen(5000);
}
bootstrap();
