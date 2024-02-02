import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ModModule } from './game/mod/mod.module';
import { ModFilesModule } from './game/mod-files/mod-files.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ModModule, ModFilesModule],
})
export class AppModule {}
