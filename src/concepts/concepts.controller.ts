import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, NotFoundException, ParseIntPipe, UseGuards } from "@nestjs/common";
import { NewUser } from "./dto/create-user.dto";
import { conceptsActions } from "./concepts.service";
import { PostUserValidateDTO } from "./dto/posted-user.dto";
import { TransformToInt } from "../pipe/concepts.pipe"
import { ValidateUpdatingUserDTO } from "./dto/updated-user.dto";
import { AuthorizeUser } from "../guards/authorization.guard"

@Controller('/concepts')
export class ConceptualTraining {

    constructor(private Actions:conceptsActions){}

    //POST -> Add new user to DB 
    @Post('/user')
    @UseGuards(AuthorizeUser)
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
        @Body(new TransformToInt()) body: ValidateUpdatingUserDTO,
        @Param('id', ParseIntPipe) id: number
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
      RemoveUser( @Param('id',ParseIntPipe) id:number  ) {
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