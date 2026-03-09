import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Nest JS in progress!');
    return 'Hello World!';
  }
}
