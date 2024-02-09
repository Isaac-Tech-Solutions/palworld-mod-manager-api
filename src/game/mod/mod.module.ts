import { Module } from '@nestjs/common';

import { ApiModule } from 'src/core/api/api.module';

import { ModService } from './mod.service';
import { ModController } from './mod.controller';

@Module({
  imports: [ApiModule],
  providers: [ModService],
  controllers: [ModController],
})
export class ModModule {}
