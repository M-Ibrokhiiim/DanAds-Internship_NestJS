import { Module } from "@nestjs/common";
import  { UsersController } from '../users/user.controller'
import { UserService } from '../users/user.service'

@Module({
    controllers:[UsersController],
    providers:[UserService]
})

export class UsersModule {}