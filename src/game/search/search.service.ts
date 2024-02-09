import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';

import { IModSearch, IModSearchResult } from 'src/core';
import { NexusService } from 'src/core/api/nexus/nexus.service';

@Injectable()
export class SearchService {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    @Inject(NexusService) private readonly nexusApi: NexusService,
  ) {}

  async search(search: string, includeAdult: boolean): Promise<IModSearch> {
    const gameID = this.configService.get<string>('GAME_ID', '6063');
    const { data } = await lastValueFrom(
      this.nexusApi.apiGet('/mods', { terms: search, game_id: Number(gameID) }),
    );
    return {
      ...data,
      include_adult: includeAdult,
      results: data?.results?.map((mod: IModSearchResult) => ({
        ...mod,
        image: `https://staticdelivery.nexusmods.com${mod?.image}`,
      })),
    };
  }
}
