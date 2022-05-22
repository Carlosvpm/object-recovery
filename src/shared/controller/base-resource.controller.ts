import { ICrudController } from './model/base-resource-controller';
import {
  Get,
  Param,
  Inject,
  Type,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

import { ICrudService } from '../services/models/baseCrudService';
import { BaseEntity } from 'typeorm';

export function createBaseController(
  service: ICrudService,
): Type<ICrudController> {
  class BaseResourceController {
    @Inject(service) private readonly service;

    @Get()
    async getAll() {
      return await this.service.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
      return await this.service.getById(id);
    }

    @Post()
    async create(@Body() resource: BaseEntity) {
      return await this.service.create(resource);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() resource: BaseEntity) {
      return await this.service.update(id, resource);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
      return await this.service.delete(id);
    }
  }
  return BaseResourceController;
}
