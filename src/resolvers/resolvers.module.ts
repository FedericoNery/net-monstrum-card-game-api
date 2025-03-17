import { Module } from '@nestjs/common';
import { ServicesModule } from '../service/services.module';
import { AuthResolver } from './auth.resolver';
import { UsersResolver } from './users.resolver';
import { FoldersResolver } from './folder.resolver';
import { CqrsModule } from '@nestjs/cqrs';
import { UpdateFolderCommandHandler } from '../commands/updateFolderCommandHandler';

@Module({
  imports: [ServicesModule, CqrsModule],
  controllers: [],
  providers: [
    UsersResolver,
    AuthResolver,
    FoldersResolver,
    UpdateFolderCommandHandler,
  ],
})
export class ResolversModule {}
