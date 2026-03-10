import { Module } from '@nestjs/common';
import { FullAppModule } from './full.module';
import { Users } from './users/user.controller'
@Module({
  imports: [FullAppModule],
  controllers: [Users],
  providers: [],
})
export class AppModule {}
