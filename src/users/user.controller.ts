import { Controller, Delete, Get, Options, Post, Put, Param, HttpCode, Body } from '@nestjs/common';
import { UsersType, UserService } from './user.service';
 
@Controller('users')
export class UsersController  {

  constructor(private userActions: UserService){

  }
  
  @Get()
   AllUsers():UsersType[] {
    return  this.userActions.ReturnAllUsers()
   }

  @Get('/name/:id')
    UserByID(@Param('id') id:string ):UsersType[] {
      return this.userActions.ReturnUserById(Number(id))
    } 
  
  @Post('/newUser')
    CreateUser(@Body() body:any){
     return this.userActions.PostNewUser(body.name)
    }

    @Delete('user/:id')
     DeleteUser(@Param('id') id:string) {
      return this.userActions.DeleteUser(Number(id))
     }

}