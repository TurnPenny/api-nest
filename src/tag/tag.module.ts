import { TagService } from './tag.sevice';
import { TagController } from './tag.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
