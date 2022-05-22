import { Marca } from 'src/marca/marca.entity';
import { createResourceService } from 'src/shared/services/base-resource.service';
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class MarcaService extends createResourceService(Marca) {}
