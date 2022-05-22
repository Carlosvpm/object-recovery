import { Celular } from 'src/celular/celular.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Marca } from 'src/marca/marca.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Modelo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 250 })
  descricao: string;

  @ApiProperty()
  @Column()
  id_marca: number;

  @ApiProperty()
  @JoinColumn({ name: 'id_marca', referencedColumnName: 'id' })
  @ManyToOne((type) => Marca, (marca) => marca.modelos)
  marca: Marca;

  @ApiProperty()
  @ManyToOne((type) => Celular, (celular) => celular.modelo)
  celulares: Celular[];
}
