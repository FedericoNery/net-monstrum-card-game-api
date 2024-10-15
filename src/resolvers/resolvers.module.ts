import { Module } from '@nestjs/common';
import { ServicesModule } from '../service/services.module';
import { AuthResolver } from './auth.resolver';
import { FooResolver } from './foo.resolver';
import { UsersResolver } from './users.resolver';
import { FoldersResolver } from './folder.resolver';
import { CardsResolver } from './card.resolver';

@Module({
  imports: [ServicesModule],
  controllers: [],
  providers: [
    FooResolver,
    UsersResolver,
    AuthResolver,
    FoldersResolver,
    CardsResolver,
  ],
})
export class ResolversModule {}
