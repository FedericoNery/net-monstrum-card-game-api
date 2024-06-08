import { Module } from '@nestjs/common';
import { ServicesModule } from '../service/services.module';
import { SelectInitialPackCommandHandler } from './SelectInitialPackCommandHandler';

@Module({
  imports: [ServicesModule],
  providers: [SelectInitialPackCommandHandler],
  exports: [SelectInitialPackCommandHandler],
})
export class CommandHandlersModule {}
