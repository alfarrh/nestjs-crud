import { NestFactory } from '@nestjs/core';

import { ValidationPipe } from '@nestjs/common';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const cors = require('cors');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Insert Here

    app.setGlobalPrefix('/api');

    app.use(cors());

    app.useGlobalPipes(new ValidationPipe({
        transform: true,
    }));

    const config = new DocumentBuilder()
        .setTitle('My Application API')
        .setDescription('My Application API')
        .setVersion('1.0.0')
        .addBearerAuth()
        .addSecurityRequirements('bearer')
        .setExternalDoc('/api-json', '/api-json')
        .build();

    const document = SwaggerModule.createDocument(app, config, {
        extraModels: [],
    });

    const CustomOptions = {
        customSiteTitle: 'My Application',
    }

    SwaggerModule.setup('api', app, document, CustomOptions);

    // Insert Here

    await app.listen(3000);
}

bootstrap();
