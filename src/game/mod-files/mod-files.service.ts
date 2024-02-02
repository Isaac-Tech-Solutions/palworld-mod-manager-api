import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, lastValueFrom } from 'rxjs';

import { IModFiles } from 'src/types';

@Injectable()
export class ModFilesService {
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

  async files(modId: number): Promise<IModFiles> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/${modId}/files.json`),
    );
    return data;
  }

  async viewFile(modId: number, fileId: number): Promise<IModFiles> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/${modId}/files/${fileId}.json`),
    );
    return data;
  }

  async downloadLink(modId: number, fileId: number): Promise<IModFiles> {
    const gameName = this.configService.get<string>('GAME_NAME', 'palworld');
    const { data } = await lastValueFrom(
      this.apiGet(`/games/${gameName}/mods/${modId}/files/${fileId}/download_link.json`),
    );
    return data;
  }
}
