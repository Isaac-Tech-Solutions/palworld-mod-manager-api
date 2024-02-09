import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiQuery,
  ApiResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { IModSearch } from 'src/core';
import { SearchService } from './search.service';

@ApiBearerAuth()
@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly service: SearchService) {}

  @ApiQuery({
    name: 'search',
    example: 'mapunlocker',
  })
  @ApiQuery({
    example: false,
    required: false,
    name: 'includeAdult',
  })
  @ApiOperation({
    summary: 'Returns the search for a desired mod',
    description: 'Returns the search for a desired mod.',
  })
  @ApiResponse({
    status: 200,
    type: IModSearch,
    description: 'success',
  })
  @Get()
  search(
    @Query('search') search: string,
    @Query('includeAdult') includeAdult: boolean,
  ) {
    return this.service.search(search, includeAdult);
  }
}
