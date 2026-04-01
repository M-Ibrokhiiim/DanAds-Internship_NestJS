import { Body, Controller, Get, Param, Query, Post, Put, Delete, HttpCode, NotFoundException } from "@nestjs/common";
import { NewUser } from "./dto/create-user.dto";
import { conceptsActions } from "./concepts.service";
import { PostUserValidateDTO } from "./dto/posted-user.dto";

@Controller('/concepts')

export class ConceptualTraining {

    constructor(private Actions:conceptsActions){}

    //POST -> Add new user to DB 
    @Post('/user')
      AddNewUser(@Body() newUser:NewUser ) {
        try{
            return  this.Actions.CreateNewUser(newUser)
        }catch(err){
            throw new NotFoundException(err.message)
        }
       
    } 
      
    //GET -> Read users from DB
    @Get('/users/all')
       AllUsers() {
        return this.Actions.GetUsers()
    }

    //PUT -> Update user
    @Put('user/:id')  
      UpdateUser(
        @Body() body,
        @Param('id') id:number
    ) {
        try{
           return this.Actions.UpdateUser(id, body)
        }catch(err){
            throw new NotFoundException(err.message)
        }
       
    }

    //DELETE -> Delete user from DB
    @Delete('/user/:id')
    @HttpCode(200)
      RemoveUser( @Param('id') id:number  ) {
        try{
          return this.Actions.RemoveUser(id)
        }catch(err){
            throw new NotFoundException(err.message)
        }
    }



    // Practice
    @Post('/practice/user')
     PostUser(@Body() body:PostUserValidateDTO) {
        return this.Actions.PostUser(body)
     }
     
}