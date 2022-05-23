import { SharedModule } from './../shared/shared.module';
import { CarroService } from './../services/carro.service';
import { TipoObjetoController } from './tipoobjeto.controller';
import { ModeloController } from './modelo.controller';
import { MarcaController } from './marca.controller';
import { DocumentoController } from './documento.controller';
import { CelularController } from './celular.controller';
import { CarroController } from './carro.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/services/service.module';

@Module({
  imports: [
    ServiceModule,
    SharedModule
  ],

  controllers: [
    CarroController,
    CelularController,
    DocumentoController,
    MarcaController,
    ModeloController,
    TipoObjetoController,
  ],
  providers: [ServiceModule, CarroService],
})
export class ControllerModule {}
