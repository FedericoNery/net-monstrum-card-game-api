import { Module } from '@nestjs/common';
import { ServicesModule } from '../service/services.module';
import { AuthResolver } from './auth.resolver';
import { FooResolver } from './foo.resolver';
import { UsersResolver } from './users.resolver';
import { FoldersResolver } from './folder.resolver';

@Module({
  imports: [ServicesModule],
  controllers: [],
  providers: [FooResolver, UsersResolver, AuthResolver, FoldersResolver],
})
export class ResolversModule {}
