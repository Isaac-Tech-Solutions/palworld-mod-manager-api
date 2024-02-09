import { Module } from '@nestjs/common';

import { ApiModule } from 'src/core/api/api.module';

import { ModFilesService } from './mod-files.service';
import { ModFilesController } from './mod-files.controller';

@Module({
  imports: [ApiModule],
  controllers: [ModFilesController],
  providers: [ModFilesService]
})
export class ModFilesModule {}
