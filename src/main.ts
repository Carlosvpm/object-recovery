import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { enviroments } from './enviroments/enviroments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API policia civil')
    .setDescription('API que permite a cunsulta de objetos sobe a tutela da policia civil do maranhão')
    .setVersion('1.0')
    .build();

  
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/swagger', app, document);
  
    app.useGlobalPipes(new ValidationPipe())
  
    await app.listen(enviroments.PORT);
}
bootstrap();
