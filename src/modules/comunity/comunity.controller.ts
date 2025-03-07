import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComunityService } from './comunity.service';
import { CreateComunityDto } from './dto/create-comunity.dto';
import { UpdateComunityDto } from './dto/update-comunity.dto';

@Controller('comunity')
export class ComunityController {
  constructor(private readonly comunityService: ComunityService) {}

  @Post()
  create(@Body() createComunityDto: CreateComunityDto) {
    return this.comunityService.create(createComunityDto);
  }

  @Get()
  findAll() {
    return this.comunityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comunityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComunityDto: UpdateComunityDto) {
    return this.comunityService.update(+id, updateComunityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comunityService.remove(+id);
  }
}
