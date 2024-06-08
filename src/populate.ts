import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './seeders/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seederService = app.get(SeederService);
  try {
    await seederService.seed();
  } catch (e) {
    console.log(e);
  } finally {
    await app.close();
  }
}

bootstrap();
