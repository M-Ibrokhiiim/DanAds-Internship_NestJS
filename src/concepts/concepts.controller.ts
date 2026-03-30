import { Body, Controller, Get, Param, Query, Post, Put, Delete, HttpCode } from "@nestjs/common";
import { NewUser } from "./dto/create-user.dto";
import { conceptsActions } from "./concepts.service";

@Controller('/concepts')

export class ConceptualTraining {

    constructor(private Actions:conceptsActions){}

    //POST -> Add new user to DB 
    @Post('/user')
      AddNewUser(@Body() body:NewUser ) {
        return  this.Actions.CreateNewUser(body)
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
       return this.Actions.UpdateUser(id, body)
    }

    //DELETE -> Delete user from DB
    @Delete('/user/:id')
    @HttpCode(200)
      RemoveUser( @Param('id') id:number  ) {
        return this.Actions.RemoveUser(id)
    }

}