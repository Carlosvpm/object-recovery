import { ServiceModule } from './services/service.module';
import { ControllerModule } from './controllers/controller.module';

import { Modelo } from 'src/models/modelo.entity';
import { Marca } from 'src/models/marca.entity';
import { TipoObjeto } from 'src/models/tipo-objeto.entity';
import { Documento } from './models/documento.entity';
import { Celular } from 'src/models/celular.entity';
import { Carro } from './models/carro.entity';
import { config } from './ormconfig';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ServiceModule,
    ControllerModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([
      Carro,
      Celular,
      Documento,
      TipoObjeto,
      Marca,
      Modelo,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
