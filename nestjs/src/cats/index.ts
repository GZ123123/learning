import { Module } from '@nestjs/common';
import { CatsController } from './controller';
import { CatsService } from './provider';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
