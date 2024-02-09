import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setVersion('1.0')
    .setTitle('PalWorld - Mod Manager')
    .addServer('/api', 'PalWorld - Mod Manager API')
    .setLicense('MIT License', 'https://isaacsolutions.tech/license-mit')
    .setTermsOfService('https://isaacsolutions.tech/palworld-mod-manager')
    .setDescription(
      'PalWorld - Mod Manager is an API designed to install mods in the PalWorld game',
    )
    .setContact(
      'Isaac Tech Solutions',
      'https://isaacsolutions.tech',
      'contact@isaacsolutions.tech',
    )
    .setExternalDoc(
      'Based on Nexus Mods Public API',
      'https://app.swaggerhub.com/apis-docs/NexusMods/nexus-mods_public_api_params_in_form_data/1.0',
    )
    .addTag(
      'Mods',
      'Mod specific routes (E.g. retreiving latest mods, endorsing a mod).',
    )
    .addTag(
      'Mod Files',
      'File specific routes (E.g. retreiving file information, retreiving download link).',
    )
    .addTag('Search', 'Search for a mod by name.')
    .build();

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));

  app.enableCors();
  app.enableVersioning({
    prefix: 'v',
    defaultVersion: ['v1'],
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('v1')

  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
