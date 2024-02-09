import { Module } from '@nestjs/common';

import { ApiModule } from 'src/core/api/api.module';

import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  imports: [ApiModule],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
