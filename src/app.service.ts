/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(){

  }
  getHello(): string {
    return 'Hello World!';
  }
  getJon(): string {
    return 'que mas fredd';
  }
}
