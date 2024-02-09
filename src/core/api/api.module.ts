import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { NexusService } from './nexus/nexus.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), HttpModule],
  providers: [NexusService],
  exports: [NexusService],
})
export class ApiModule {}
