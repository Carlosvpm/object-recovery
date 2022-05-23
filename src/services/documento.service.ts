import { createResourceService } from 'src/shared/services/base-resource.service';
import { Injectable } from '@nestjs/common';
import { Documento } from 'src/models/documento.entity';

@Injectable()
export class DocumentoService extends createResourceService(Documento) {
  constructor() {
    super();
  }

  async getDocumentoPorCpf(cpf: string): Promise<Documento[]> {
    return this.resourceRepository.find({
      where: {
        cpf: cpf,
      },
    });
  }

  async getDocumentoPorNumero(numero: string): Promise<Documento[]> {
    return this.resourceRepository.find({
      where: {
        numero: numero,
      },
    });
  }
}
