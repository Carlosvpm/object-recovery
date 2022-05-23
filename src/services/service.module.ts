import { ControlerModule } from './../shared/controller/controler.module';
import { TipoObjetoService } from './tipoobjeto.service';
import { ModeloService } from 'src/services/modelo.service';
import { MarcaService } from 'src/services/marca.service';
import { DocumentoService } from 'src/services/documento.service';
import { CelularService } from 'src/services/celular.service';
import { CarroService } from 'src/services/carro.service';

import { Module } from '@nestjs/common';

@Module({
  providers: [
    CarroService,
    CelularService,
    DocumentoService,
    MarcaService,
    ModeloService,
    TipoObjetoService,
  ],
  controllers: [ControlerModule],
  exports: [
    CarroService,
    CelularService,
    DocumentoService,
    MarcaService,
    ModeloService,
    TipoObjetoService,
  ],
})
export class ServiceModule {}
