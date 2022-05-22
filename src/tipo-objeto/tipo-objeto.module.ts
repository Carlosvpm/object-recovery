import { TipoObjeto } from './tipo-objeto.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([TipoObjeto])],
    controllers: [],
    providers: [],
})
export class TipoObjetoModule {}
