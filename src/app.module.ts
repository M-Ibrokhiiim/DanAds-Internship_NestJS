import { Module } from '@nestjs/common';
import { FullAppModule } from './full.module';
import { Users } from './users/user.controller'
import { Sellers } from './sellers/sellers.controller';
@Module({
  imports: [FullAppModule],
  controllers: [Users,Sellers],
  providers: [],
})
export class AppModule {}
