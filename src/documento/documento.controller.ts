import { DocumentoService } from './documento.service';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Documentos')
@Controller('api/documento')
export class DocumentoController extends createBaseController(DocumentoService) {}
