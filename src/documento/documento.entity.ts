import { ApiProperty } from "@nestjs/swagger";
import { TipoObjeto } from "src/tipo-objeto/tipo-objeto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Documento {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ unique: true })
  numero: string;

  @ApiProperty()
  @Column({ unique: true })
  cpf: string;

  @ApiProperty()
  @Column()
  id_tipo: number;

  @ApiProperty()
  @JoinColumn({ name: 'id_tipo', referencedColumnName: 'id' })
  @ManyToOne((type) => TipoObjeto, (tipoObjeto) => tipoObjeto.carros)
  tipo_objeto: TipoObjeto;
}
