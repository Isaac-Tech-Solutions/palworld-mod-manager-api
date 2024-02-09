import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiParam,
  ApiResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { IModFiles } from 'src/core';
import { ModFilesService } from './mod-files.service';

@ApiBearerAuth()
@ApiTags('Mod Files')
@Controller('mod-files')
export class ModFilesController {
  constructor(private readonly service: ModFilesService) {}

  @ApiParam({
    name: 'modId',
    example: '11',
  })
  @ApiOperation({
    summary: 'Lists all files for a specific mod',
    description: 'Lists all files for a specific mod.',
  })
  @ApiResponse({
    status: 200,
    type: IModFiles,
    description: 'success',
  })
  @Get(':modId')
  files(@Param('modId') modId: number) {
    return this.service.files(modId);
  }

  @ApiParam({
    name: 'modId',
    example: '11',
  })
  @ApiParam({
    name: 'fileId',
    example: '15',
  })
  @ApiOperation({
    summary: 'View a specified mod file',
    description: 'View a specified mod file, using a specified game and mod.',
  })
  @ApiResponse({
    status: 200,
    type: IModFiles,
    description: 'success',
  })
  @Get(':modId/view/:fileId')
  viewFile(@Param('modId') modId: number, @Param('fileId') fileId: number) {
    return this.service.viewFile(modId, fileId);
  }

  @ApiParam({
    name: 'modId',
    example: '11',
  })
  @ApiParam({
    name: 'fileId',
    example: '15',
  })
  @ApiOperation({
    summary: 'Generate download link for mod file',
    description:
      'Generate download link for mod file. For premium users, will return array of download links with their prefered download location in the first element.',
  })
  @ApiResponse({
    status: 200,
    type: IModFiles,
    description: 'success',
  })
  @Get(':modId/download-link/:fileId')
  downloadLink(@Param('modId') modId: number, @Param('fileId') fileId: number) {
    return this.service.downloadLink(modId, fileId);
  }
}
