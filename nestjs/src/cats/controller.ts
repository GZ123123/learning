import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { CreateCatsDTO } from './dtos';
import { CatsService } from './provider';

import { Cats } from './interface';

@Controller('cats')
export class CatsController {
  constructor(private _ser: CatsService) {}

  @Get()
  async getAll(@Res() res: any): Promise<Cats[]> {
    const cats = this._ser.getAll();
    if (!cats.length)
      return res.status(404).json({ data: cats, message: 'ERROR' });

    return res.status(200).json({ data: cats, message: 'SUCCESS' });
  }

  @Post()
  async create(@Body() body: CreateCatsDTO, @Res() res: any): Promise<any> {
    const _cat = this._ser.create(body);
    if (!_cat) return res.status(400);
    return res.status(201).json({ message: 'Cat Created' });
  }
}
