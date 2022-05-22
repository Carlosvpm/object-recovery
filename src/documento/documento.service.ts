import { Documento } from './documento.entity';
import { createResourceService } from 'src/shared/services/base-resource.service';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentoService extends createResourceService(Documento) {}
