import { TipoObjeto } from 'src/models/tipo-objeto.entity';
import { createResourceService } from 'src/shared/services/base-resource.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TipoObjetoService extends createResourceService(TipoObjeto) {}
