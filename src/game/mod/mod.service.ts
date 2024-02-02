import { Observable, lastValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { IModUpdated } from 'src/types';

@Injectable()
export class ModService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  apiGet(url: string): Observable<any> {
    const apiUrl = this.configService.get<string>('API_URL', '');
    const apiKey = this.configService.get<string>('API_KEY', '');
    return this.httpService.get(`${apiUrl}/${url}`, {
      headers: {
        apiKey,
      },
    });
  }

  async updated(period: string): Promise<IModUpdated[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/updated.json?period=${period}`),
    );
    return data;
  }

  async latestdAdded(): Promise<IModUpdated[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/latest_added.json`),
    );
    return data;
  }

  async latestUpdated(): Promise<IModUpdated[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/latest_updated.json`),
    );
    return data;
  }

  async trending(): Promise<IModUpdated[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/trending.json`),
    );
    return data;
  }

  async view(modId: number): Promise<IModUpdated[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/${modId}.json`),
    );
    return data;
  }

  async changelogs(modId: number): Promise<IModUpdated[]> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/${modId}/changelogs.json`),
    );
    return data;
  }
}