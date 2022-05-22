import { Module } from '@nestjs/common';
import { ServiceModule } from './services/service.module';
import { ControlerModule } from './controller/controler.module';

@Module({
    imports: [
        ServiceModule,
        ControlerModule,
    ],
    exports: [
        ServiceModule,
        ControlerModule,
    ]
})
export class SharedModule {}
