import { Carro } from './carro.entity';
import { createResourceService } from 'src/shared/services/base-resource.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarroService extends createResourceService(Carro) {}
