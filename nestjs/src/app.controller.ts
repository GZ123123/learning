import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/provider';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catService: CatsService,
  ) {}

  @Get()
  async getHello(): Promise<any> {
    return this.catService.getAll();
    // return this.appService.getHello();
  }
}
