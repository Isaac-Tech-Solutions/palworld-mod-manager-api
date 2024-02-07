import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setVersion('1.0')
    .setBasePath('/api')
    .setTitle('PalWorld - Mod Manager')
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
      'Mod specific routes (E.g. retreiving latest mods, endorsing a mod)',
    )
    .addTag(
      'Mod Files',
      'File specific routes (E.g. retreiving file information, retreiving download link)',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
