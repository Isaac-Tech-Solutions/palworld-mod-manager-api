import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NexusService {
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
}
