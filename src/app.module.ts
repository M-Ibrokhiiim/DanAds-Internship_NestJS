import { Module, MiddlewareConsumer} from '@nestjs/common';
import { CarsModule } from './cars/cars.module'
import { Concepts } from './concepts/concepts.module';
import { PracticeMiddlewar } from './middleware/concepts-practice.middleware';
 
 
@Module({
  imports: [ CarsModule, Concepts, ],
  controllers: [],
  providers: [],
})
export class AppModule {
 configure(consumer: MiddlewareConsumer) {
   consumer
      .apply(PracticeMiddlewar)
      .forRoutes('concepts/practices/user')
 }
}
