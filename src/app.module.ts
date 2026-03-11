import { Module } from '@nestjs/common';
import { UsersController} from './users/user.controller'
import { UserService } from './users/user.service';
import { UsersModule } from './users/user.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
