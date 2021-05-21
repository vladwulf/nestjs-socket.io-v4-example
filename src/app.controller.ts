import { Sse } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Sse('sse')
  testSee() {
    return interval(3000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
