import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll() {
    return ['dragins', 'coffee'];
  }
}
