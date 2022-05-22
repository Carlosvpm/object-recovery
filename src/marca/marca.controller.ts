import { MarcaService } from './marca.service';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Marcas')
@Controller('api/marca')
export class MarcaController extends createBaseController(MarcaService){}
