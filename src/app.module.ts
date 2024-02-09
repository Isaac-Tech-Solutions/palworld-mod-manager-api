import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ModModule } from './game/mod/mod.module';
import { SearchModule } from './game/search/search.module';
import { ModFilesModule } from './game/mod-files/mod-files.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ModModule,
    SearchModule,
    ModFilesModule,
  ],
  providers: [],
})
export class AppModule {}
