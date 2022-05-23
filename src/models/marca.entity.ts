import { Celular } from 'src/models/celular.entity';

import { ApiProperty } from '@nestjs/swagger';
import { Column, OneToMany, PrimaryGeneratedColumn, Entity, JoinColumn } from 'typeorm';
import { Modelo } from 'src/models/modelo.entity';


@Entity()
export class Marca {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 250 })
  descricao: string;

  @ApiProperty()
  @OneToMany(type => Modelo, modelo => modelo.marca)
  modelos: Modelo[];

  @ApiProperty()
  @OneToMany(type => Celular, celular => celular.marca)
  celulares: Celular[];
}
