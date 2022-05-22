import { DocumentoService } from './documento.service';
import { DocumentoController } from './documento.controller';
import { Documento } from './documento.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Documento])],
  controllers: [DocumentoController],
  providers: [DocumentoService],
})
export class DocumentoModule {}
