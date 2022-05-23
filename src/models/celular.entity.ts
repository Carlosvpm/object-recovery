import { Marca } from './marca.entity';
import { TipoObjeto } from 'src/models/tipo-objeto.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Modelo } from 'src/models/modelo.entity';

@Entity()
export class Celular {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  id_marca: number;

  @ApiProperty()
  @Column()
  id_tipo: number;

  @ApiProperty()
  @Column({ unique: true })
  imei: string;

  @ApiProperty()
  @Column()
  id_modelo: number;

  @JoinColumn({ name: 'id_modelo', referencedColumnName: 'id' })
  @ManyToOne((type) => Modelo, (modelo) => modelo.celulares)
  modelo: Modelo;

  @JoinColumn({ name: 'id_tipo', referencedColumnName: 'id' })
  @ManyToOne((type) => TipoObjeto, (tipoObjeto) => tipoObjeto.celulares)
  tipo_objeto: TipoObjeto;

  @JoinColumn({ name: 'id_marca', referencedColumnName: 'id' })
  @ManyToOne((type) => Marca, (marca) => marca.celulares)
  marca: Marca;
}
