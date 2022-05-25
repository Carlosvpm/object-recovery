import { CelularService } from 'src/services/celular.service';
import { TipoObjetoService } from './../services/tipoobjeto.service';
import { ModeloController } from './modelo.controller';
import { DocumentoController } from './documento.controller';
import { CelularController } from './celular.controller';
import { CarroController } from './carro.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MarcaController } from './marca.controller';
import { TipoObjetoController } from './tipoobjeto.controller';
import { CarroService } from 'src/services/carro.service';
import { MarcaService } from 'src/services/marca.service';
import { DocumentoService } from 'src/services/documento.service';
import { ModeloService } from 'src/services/modelo.service';
import { SharedModule } from 'src/shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Celular } from 'src/models/celular.entity';
import { Documento } from 'src/models/documento.entity';
import { Carro } from 'src/models/carro.entity';
import { Marca } from 'src/models/marca.entity';
import { Modelo } from 'src/models/modelo.entity';
import { TipoObjeto } from 'src/models/tipo-objeto.entity';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Celular, Carro, Documento, Marca, Modelo, TipoObjeto])],
  controllers: [
    CarroController,
    CelularController,
    DocumentoController,
    MarcaController,
    TipoObjetoController,
    ModeloController,
  ],
  providers: [
    CarroService,
    MarcaService,
    DocumentoService,
    TipoObjetoService,
    CelularService,
    ModeloService,
  ],
})
export class ControllerModule {}
