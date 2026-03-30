import { Body, Controller, Get, Param, Query, Post } from "@nestjs/common";
import { NewUser } from "./dto/create-user.dto";

@Controller('/concepts')

export class ConceptualTraining {

    // Works with Query params.
    @Get('/location')
      ReturnLocation(
        @Query('country') country:string,
        @Query('region') region:string ){


        return [{ country, region }]
      }

    // Works with request parameter
    @Get('/users/:id')
      ReturnUser(@Param('id') id:number){
        return [{ id }]
      }

    // Add new user to DB 
    @Post('/user')
      AddNewUser(@Body() body:NewUser ){
        return [ { id:1, name:body.name, surname:body.surname, nickname:body.nickname, password:body.password } ]
      }
      
}