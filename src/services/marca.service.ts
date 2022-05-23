import { Marca } from 'src/models/marca.entity';
import { createResourceService } from 'src/shared/services/base-resource.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MarcaService extends createResourceService(Marca) {}
