import { Module } from '@nestjs/common';
import { ServicesModule } from '../service/services.module';

@Module({
  imports: [ServicesModule],
})
export class AuthModule {}
