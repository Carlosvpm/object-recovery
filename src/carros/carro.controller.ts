import { CarroService } from './carro.service';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Carros')
@Controller('api/carros')
export class CarroController extends createBaseController(CarroService) {}
