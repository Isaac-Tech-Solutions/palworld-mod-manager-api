import { Observable, lastValueFrom } from 'rxjs';

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import {
  IMod,
  IModSearch,
  IModUpdated,
  IModChangeLogs,
  IModSearchResult,
} from 'src/types';

@Injectable()
export class ModService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  apiGet(url: string, params?: any): Observable<any> {
    const apiUrl = this.configService.get<string>('API_URL', '');
    const apiKey = this.configService.get<string>('API_KEY', '');
    return this.httpService.get(`${apiUrl}/${url}`, {
      headers: {
        apiKey,
      },
      params,
    });
  }

  async updated(period: string): Promise<IModUpdated[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/v1/games/${gameName}/mods/updated.json?period=${period}`),
    );
    return data;
  }

  async latestdAdded(): Promise<IMod[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/v1/games/${gameName}/mods/latest_added.json`),
    );
    return data;
  }

  async latestUpdated(): Promise<IMod[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/v1/games/${gameName}/mods/latest_updated.json`),
    );
    return data;
  }

  async trending(): Promise<IMod[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/v1/games/${gameName}/mods/trending.json`),
    );
    return data;
  }

  async view(modId: number): Promise<IMod[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/v1/games/${gameName}/mods/${modId}.json`),
    );
    return data;
  }

  async changelogs(modId: number): Promise<IModChangeLogs> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/v1/games/${gameName}/mods/${modId}/changelogs.json`),
    );
    return data;
  }

  async search(search: string): Promise<IModSearch> {
    const gameID = this.configService.get<string>('GAME_ID', '0');
    const { data } = await lastValueFrom(
      this.apiGet('/mods', { terms: search, game_id: Number(gameID) }),
    );
    return {
      ...data,
      results: data?.results?.map((mod: IModSearchResult) => ({
        ...mod,
        image: `https://staticdelivery.nexusmods.com${mod?.image}`,
      })),
    };
  }
}
