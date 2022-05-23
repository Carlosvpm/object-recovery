import { Body, Controller, Post, Get, Param, Query } from '@nestjs/common';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { ApiTags } from '@nestjs/swagger';
import { CelularService } from 'src/services/celular.service';

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


  @Get('findByModelo/:id')
  async getCelularPorModelo(@Param('id') id_modelo: number) {
    return await this.service.getCelularPorModelo(id_modelo);
  }

  @Get('findByImei/:imei')
  async getCelularPorImei(@Param('imei') imei: string) {
    return await this.service.getCelularPorImei(imei);
  }
}
