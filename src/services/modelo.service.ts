import { Modelo } from 'src/models/modelo.entity';
import { Injectable } from '@nestjs/common';
import { createResourceService } from 'src/shared/services/base-resource.service';

@Injectable()
export class ModeloService extends  createResourceService(Modelo) {}
