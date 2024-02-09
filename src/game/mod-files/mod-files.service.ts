import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { IModFiles } from 'src/core';
import { NexusService } from 'src/core/api/nexus/nexus.service';

@Injectable()
export class ModFilesService {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    @Inject(NexusService) private readonly nexusApi: NexusService,
  ) {}

  async files(modId: number): Promise<IModFiles> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(`/games/${gameName}/mods/${modId}/files.json`),
    );
    return data;
  }

  async viewFile(modId: number, fileId: number): Promise<IModFiles> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(
        `/games/${gameName}/mods/${modId}/files/${fileId}.json`,
      ),
    );
    return data;
  }

  async downloadLink(modId: number, fileId: number): Promise<IModFiles> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(
        `/games/${gameName}/mods/${modId}/files/${fileId}/download_link.json`,
      ),
    );
    return data;
  }
}
