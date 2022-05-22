import { ModeloService } from './modelo.service';
import { Modelo } from 'src/modelo/modelo.entity';
import { ModeloController } from './modelo.controller';


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Modelo])],
  controllers: [ModeloController],
  providers: [ModeloService],
})
export class ModeloModule {}
