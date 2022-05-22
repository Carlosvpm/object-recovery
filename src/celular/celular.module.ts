import { CelularService } from './celular.service';
import { CelularController } from './celular.controller';
import { Celular } from 'src/celular/celular.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Celular])],
  controllers: [CelularController],
  providers: [CelularService],
})
export class CelularModule {}
