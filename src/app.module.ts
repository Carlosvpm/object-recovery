import { Modelo } from 'src/modelo/modelo.entity';
import { Marca } from 'src/marca/marca.entity';
import { TipoObjetoService } from './tipo-objeto/tipoobjeto.service';
import { TipoObjetoController } from './tipo-objeto/tipoobjeto.controller';
import { ModeloModule } from './modelo/modelo.module';
import { MarcaModule } from './marca/marca.module';
import { TipoObjeto } from 'src/tipo-objeto/tipo-objeto.entity';
import { Documento } from './documento/documento.entity';
import { Celular } from 'src/celular/celular.entity';
import { Carro } from './carros/carro.entity';
import { config } from './ormconfig';
import { DocumentoModule } from './documento/documento.module';
import { CelularModule } from './celular/celular.module';
import { TipoObjetoModule } from './tipo-objeto/tipo-objeto.module';

import { CarroModule } from './carros/carro.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ModeloModule,
    MarcaModule,
    DocumentoModule,
    CelularModule,
    TipoObjetoModule,
    CarroModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Carro, Celular, Documento, TipoObjeto, Marca, Modelo]),
  ],
  controllers: [TipoObjetoController, AppController],
  providers: [TipoObjetoService, AppService],
})
export class AppModule {}
