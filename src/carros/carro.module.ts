import { Carro } from './carro.entity';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Carro])],
  controllers: [CarroController],
  providers: [CarroService],
})
export class CarroModule {}
