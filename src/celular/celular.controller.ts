import { Marca } from 'src/marca/marca.entity';
import { Body, Controller, Post, Get, Param, Query } from '@nestjs/common';
import { CelularService } from './celular.service';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Celulares')
@Controller('api/celular')
export class CelularController extends createBaseController(CelularService) {
  constructor(private service: CelularService) {
    super();
  }

  @Get('findByMarca/:id')
  async getCelularPorMarca(@Param('id') id_marca: number) {
    return await this.service.getCelularPorMarca(id_marca);
  }
}
