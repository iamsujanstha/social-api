import { Module } from '@nestjs/common';
import { ComunityService } from './comunity.service';
import { ComunityController } from './comunity.controller';

@Module({
  controllers: [ComunityController],
  providers: [ComunityService],
})
export class ComunityModule {}
