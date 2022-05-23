import { Repository } from 'typeorm';
import { BaseEntity } from '../models/base-entity';

import { Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

export function createResourceService(repository): Type<any> {
  class BaseResourceService {
    @InjectRepository(repository)
    private resourceRepository: Repository<BaseEntity>;

    async getAll(): Promise<BaseEntity[]> {
      return this.resourceRepository.find();
    }

    async getPorTipo(idtipo: number): Promise<BaseEntity[]> {
      return this.resourceRepository.find({
        where: {
          id_tipo: idtipo,
        },
      });
    }

    async getById(id: number): Promise<BaseEntity> {
      return this.resourceRepository.findOne({ where: { id: id } });
    }
    async create(resource: BaseEntity) {
      const createdT = this.resourceRepository.create(resource);
      await this.resourceRepository.save(resource);
      return createdT;
    }

    async update(id: number, resource: BaseEntity) {
      await this.resourceRepository.update(id, resource);
      return this.getById(id);
    }

    async delete(id: number) {
      await this.resourceRepository.delete(id);
      return { deleted: true };
    }
  }
  return BaseResourceService;
}
