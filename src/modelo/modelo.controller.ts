import { ModeloService } from './modelo.service';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Modelo')
@Controller('api/modelo')
export class ModeloController extends createBaseController(ModeloService) {}
