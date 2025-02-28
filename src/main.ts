import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

const cors = require('cors');
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Insert Here
  app.setGlobalPrefix('/api');

  app.use(cors());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Pendencies')
    .setDescription('App for pendencies management.')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [],
  });

  const CustomOptions = {
    customSiteTitle: 'Pendencies',
  };

  SwaggerModule.setup('api', app, document, CustomOptions);

  // Insert Here
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
