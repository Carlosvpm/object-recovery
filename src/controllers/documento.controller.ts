import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DocumentoService } from 'src/services/documento.service';

@ApiTags('Documentos')
@Controller('api/documento')
export class DocumentoController extends createBaseController(
  DocumentoService,
) {
  constructor(private service: DocumentoService) {
    super();

  }

  @Get('findByCpf/:cpf')
  async getDocumetoPorCpf(@Param('cpf') cpf: string) {
    return await this.service.getDocumentoPorCpf(cpf);
  }



}
