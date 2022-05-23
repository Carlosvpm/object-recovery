import { createResourceService } from 'src/shared/services/base-resource.service';
import { Injectable } from '@nestjs/common';
import { Carro } from 'src/models/carro.entity';

@Injectable()
export class CarroService extends createResourceService(Carro) {
  constructor() {
    super();
  }

  async getCarroPorPlaca(placa: string): Promise<Carro[]> {
    return this.resourceRepository.find({
      where: {
        placa: placa,
      },
    });
  }
}
