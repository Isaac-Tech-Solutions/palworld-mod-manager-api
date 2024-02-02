import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ModFilesController } from './mod-files.controller';
import { ModFilesService } from './mod-files.service';

@Module({
  imports: [HttpModule],
  controllers: [ModFilesController],
  providers: [ModFilesService]
})
export class ModFilesModule {}
