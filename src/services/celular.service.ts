import { Celular } from 'src/models/celular.entity';
import { createResourceService } from 'src/shared/services/base-resource.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CelularService extends createResourceService(Celular) {
  constructor() {
    super();
  }

  async getCelularPorMarca(idMarca: number): Promise<Celular[]> {
    return this.resourceRepository.find({
      where: {
        id_marca: idMarca,
      },
    });
  }

  async getCelularPorModelo(idModelo: number): Promise<Celular[]> {
    return this.resourceRepository.find({
      where: {
        id_modelo: idModelo,
      },
    });
  }

  async getCelularPorImei(imei: string): Promise<Celular[]> {
    return this.resourceRepository.find({
      where: {
        imei: imei,
      },
    });
  }

  // verificaTipoCelular(celular: Celular): boolean {
  //   if (celular.id_tipo != 1) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  async create(celular: Celular) {
    const createdCelular = this.resourceRepository.create(celular);
    await this.resourceRepository.save(celular);
    return createdCelular;
  }
}
