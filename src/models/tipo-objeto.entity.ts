import { Documento } from './documento.entity';
import { Carro } from './carro.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Celular } from 'src/models/celular.entity';

@Entity()
export class TipoObjeto {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 150 })
  descricao: string;

  @ApiProperty()
  @OneToMany(() => Carro, (carro) => carro.tipo_objeto)
  carros: Carro[];

  @ApiProperty()
  @OneToMany(() => Celular, (celular) => celular.tipo_objeto)
  celulares: Celular[];

  @ApiProperty()
  @OneToMany(() => Documento, (documeto) => documeto.tipo_objeto)
  documentos: Documento[];
}
