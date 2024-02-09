import { lastValueFrom } from 'rxjs';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { IMod, IModUpdated, IModChangeLogs } from 'src/core';
import { NexusService } from 'src/core/api/nexus/nexus.service';

@Injectable()
export class ModService {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    @Inject(NexusService) private readonly nexusApi: NexusService,
  ) {}

  async updated(period: string): Promise<IModUpdated[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(
        `/v1/games/${gameName}/mods/updated.json?period=${period}`,
      ),
    );
    return data;
  }

  async latestdAdded(): Promise<IMod[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(`/v1/games/${gameName}/mods/latest_added.json`),
    );
    return data;
  }

  async latestUpdated(): Promise<IMod[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(`/v1/games/${gameName}/mods/latest_updated.json`),
    );
    return data;
  }

  async trending(): Promise<IMod[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(`/v1/games/${gameName}/mods/trending.json`),
    );
    return data;
  }

  async view(modId: number): Promise<IMod[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(`/v1/games/${gameName}/mods/${modId}.json`),
    );
    return data;
  }

  async changelogs(modId: number): Promise<IModChangeLogs> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet(
        `/v1/games/${gameName}/mods/${modId}/changelogs.json`,
      ),
    );
    return data;
  }
}
