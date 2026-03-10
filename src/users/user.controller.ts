import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class Users {
    
 @Get()
  AllUsers() {
    return 'All users of count is 1200';
  }
}