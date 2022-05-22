import { TipoObjetoService } from './tipoobjeto.service';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tipos de Objeto')
@Controller('api/tiposObjeto')
export class TipoObjetoController extends createBaseController(TipoObjetoService){}
