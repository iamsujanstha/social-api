import { Injectable } from '@nestjs/common';
import { CreateComunityDto } from './dto/create-comunity.dto';
import { UpdateComunityDto } from './dto/update-comunity.dto';

@Injectable()
export class ComunityService {
  create(createComunityDto: CreateComunityDto) {
    return 'This action adds a new comunity';
  }

  findAll() {
    return `This action returns all comunity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comunity`;
  }

  update(id: number, updateComunityDto: UpdateComunityDto) {
    return `This action updates a #${id} comunity`;
  }

  remove(id: number) {
    return `This action removes a #${id} comunity`;
  }
}
