import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module'
import { Concepts } from './concepts/concepts.module';
 
@Module({
  imports: [ CarsModule, Concepts, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
