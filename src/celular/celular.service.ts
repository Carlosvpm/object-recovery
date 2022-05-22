import { Celular } from 'src/celular/celular.entity';
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
}
