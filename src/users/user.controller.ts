import { Controller, Get, Param } from '@nestjs/common';

@Controller('/users')
export class Users {

 @Get()
  AllUsers():string {
    return `Your order is ready`;
  }
}