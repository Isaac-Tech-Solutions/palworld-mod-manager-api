import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiParam,
  ApiResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { IModLastAdded, IModUpdated } from 'src/types';
import { ModService } from './mod.service';

@ApiBearerAuth()
@ApiTags('Mods')
@Controller('mod')
export class ModController {
  constructor(private readonly service: ModService) {}

  @ApiParam({
    name: 'period',
    description:
      'The only accepted periods are 1d, 1w and 1m (1 day, 1 week and 1 month).',
    example: '1d',
  })
  @ApiOperation({
    summary: 'Returns a list of mods that have been updated in a given period',
    description:
      'Returns a list of mods that have been updated in a given period, with timestamps of their last update. Cached for 5 minutes.',
  })
  @ApiResponse({
    status: 200,
    type: [IModUpdated],
    description: 'success',
  })
  @Get(':period')
  updated(@Param('period') period: string) {
    return this.service.updated(period);
  }

  @ApiParam({
    name: 'modId',
    example: '11',
  })
  @ApiOperation({
    summary: 'Returns list of changelogs for mod',
    description: 'Returns list of changelogs for mod.',
  })
  @ApiResponse({
    status: 200,
    type: IModLastAdded,
    description: 'success',
  })
  @Get('/changelogs/:modId')
  changelogs(@Param('modId') modId: number) {
    return this.service.changelogs(modId);
  }

  @ApiParam({
    name: 'modId',
    example: '11',
  })
  @ApiOperation({
    summary: 'Retrieve specified mod, from a specified game',
    description:
      'Retrieve specified mod, from a specified game. Cached for 5 minutes.',
  })
  @ApiResponse({
    status: 200,
    type: IModLastAdded,
    description: 'success',
  })
  @Get('/view/:modId')
  view(@Param('modId') modId: number) {
    return this.service.view(modId);
  }

  @ApiOperation({
    summary: 'Retrieve 10 latest added mods for a specified game',
    description: 'Retrieve 10 latest added mods for a specified game.',
  })
  @ApiResponse({
    status: 200,
    type: [IModLastAdded],
    description: 'success',
  })
  @Get('/latest')
  latestdAdded() {
    return this.service.latestdAdded();
  }

  @ApiOperation({
    summary: 'Retrieve 10 latest updated mods for a specified game',
    description: 'Retrieve 10 latest updated mods for a specified game.',
  })
  @ApiResponse({
    status: 200,
    type: [IModLastAdded],
    description: 'success',
  })
  @Get('/latest/updated')
  latestUpdated() {
    return this.service.latestUpdated();
  }

  @ApiOperation({
    summary: 'Retrieve 10 trending mods for a specified game',
    description: 'Retrieve 10 trending mods for a specified game.',
  })
  @ApiResponse({
    status: 200,
    type: [IModLastAdded],
    description: 'success',
  })
  @Get('/latest/trending')
  trending() {
    return this.service.trending();
  }
}
