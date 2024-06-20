import { NestFactory } from '@nestjs/core';
import { SeederService } from './seeders/seeder.service';
import { PopulateModule } from './populate.module';

async function bootstrap() {
  const app = await NestFactory.create(PopulateModule);
  const seederService = app.get(SeederService);
  try {
    await seederService.drop();
  } catch (e) {
    console.log(e);
  } finally {
    await app.close();
  }
}

bootstrap();
