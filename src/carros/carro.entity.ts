import { ApiProperty } from '@nestjs/swagger';
import { TipoObjeto } from 'src/tipo-objeto/tipo-objeto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Carro {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ maxLength: 7 })
  @Column({ unique: true })
  placa: string;

  @ApiProperty()
  @Column()
  id_tipo: number;

  @ApiProperty()
  @JoinColumn({ name: 'id_tipo', referencedColumnName: 'id' })
  @ManyToOne((type) => TipoObjeto, (tipoObjeto) => tipoObjeto.carros)
  tipo_objeto: TipoObjeto;
}
