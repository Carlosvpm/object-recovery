import { TipoObjeto } from 'src/tipo-objeto/tipo-objeto.entity';
import { createResourceService } from 'src/shared/services/base-resource.service';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class TipoObjetoService extends createResourceService(TipoObjeto) {}
