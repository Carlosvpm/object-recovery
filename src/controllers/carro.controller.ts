import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CarroService } from 'src/services/carro.service';

@ApiTags('Carros')
@Controller('api/carro')
export class CarroController extends createBaseController(CarroService) {
  constructor(private service: CarroService) {
    super();
  }

  @Get('findByPlaca/:placa')
  async getCarroPorPlaca(@Param('placa') placa: string) {
    return await this.service.getCarroPorPlaca(placa);
  }
}
