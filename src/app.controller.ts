import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { SomeInterceptor } from './some-interceptor.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(SomeInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(SomeInterceptor)
  postHello(): string {
    return this.appService.getHello();
  }
}
