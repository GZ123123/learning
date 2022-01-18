import { Injectable } from '@nestjs/common';
import { Cats } from './interface';

@Injectable()
export class CatsService {
  private cats: Cats[] = [];

  create(cat: Cats): boolean {
    this.cats.push(cat);
    return true;
  }

  getAll(): Cats[] {
    return this.cats;
  }
}
