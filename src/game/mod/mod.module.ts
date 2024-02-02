import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ModService } from './mod.service';
import { ModController } from './mod.controller';

@Module({
  imports: [HttpModule],
  providers: [ModService],
  controllers: [ModController],
})
export class ModModule {}
