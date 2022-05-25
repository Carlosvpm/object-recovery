import { TipoObjeto } from './../models/tipo-objeto.entity';
import { Modelo } from './../models/modelo.entity';
import { Marca } from './../models/marca.entity';
import { Documento } from './../models/documento.entity';
import { Carro } from './../models/carro.entity';
import { ModeloService } from './modelo.service';
import { Module } from '@nestjs/common';
import { CelularService } from './celular.service';
import { CarroService } from './carro.service';
import { DocumentoService } from './documento.service';
import { MarcaService } from './marca.service';
import { TipoObjetoService } from './tipoobjeto.service';
import { DocumentoController } from 'src/controllers/documento.controller';
import { CelularController } from 'src/controllers/celular.controller';
import { CarroController } from 'src/controllers/carro.controller';
import { ModeloController } from 'src/controllers/modelo.controller';
import { TipoObjetoController } from 'src/controllers/tipoobjeto.controller';
import { MarcaController } from 'src/controllers/marca.controller';
import { SharedModule } from 'src/shared/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Celular } from 'src/models/celular.entity';

@Module({
  imports: [
   SharedModule,
   TypeOrmModule.forFeature([Celular, Carro, Documento, Marca, Modelo, TipoObjeto])
  ],
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
export class ServiceModule {}
