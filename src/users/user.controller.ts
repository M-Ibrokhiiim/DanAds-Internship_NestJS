import { Controller, Delete, Get, Options, Post, Put } from '@nestjs/common';

@Controller('/users')
export class Users {

  @Get()
  AllUsers():string {
    return `Your order is ready`;
  }

  @Post() 
   CreateNewUser():string {
    // 
    // 
    // 
    // 
    return `User successfully created!`

   }

  @Put()
    UpdateUser():string {
      // 
      // 
      // 
      return `User is updated!`
    }

  @Delete()
     RemoveUser():string {
      // 
      // 
      return `User deleted!`
     }

  @Options()
      Options():string {
        return ' You can call GET, POST, PUT, DELETE HTTP methods to this users URL!'
     }
}