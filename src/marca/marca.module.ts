import { createResourceService } from 'src/shared/services/base-resource.service';
import { MarcaService } from './marca.service';
import { Marca } from 'src/marca/marca.entity';
import { MarcaController } from './marca.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  controllers: [MarcaController],
  providers: [MarcaService],
})
export class MarcaModule extends createResourceService(Marca) {}
