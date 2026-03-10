import { Controller, Delete, Get, Options, Post, Put, Param, HttpCode, Body } from '@nestjs/common';
 
@Controller('users')
export class Users  {
  private users:{id:number, name: string}[] =  [
                 {"id":1, name: 'Ibrokhiiim'},
                 {"id":2, name: 'Elshod1'},
                 {"id":3, name: 'Diyor'},
                 {"id":4, name: 'Anvar'},
                 ]

  @Get()
   AllUsers():{id:number, name: string}[] {
    return  this.users
   }

  @Get('users/name/:id')
    ExactUser(@Param('id') id:string ):{id:number, name: string}[] {
      return this.users.filter((user) => Number(user.id) === Number(id))
    } 
  
  @Post('/newUser')
    CreateUser(@Body() body:any){
      const newUser = {id:this.users.length + 1, name: body.name} 
      this.users.push(newUser)

       return { status:201, message:`${body.name} is added to Database !` }
    }

    @Delete('user/:id')
     DeleteUser(@Param('id') id:string) {
      this.users = this.users.filter((user) => Number(user.id) !== Number(id))

      return 'User deleted!'
     }
  
}