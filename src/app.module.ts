import { Module } from '@nestjs/common';
import { FullAppModule } from './full.module';
@Module({
  imports: [FullAppModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
