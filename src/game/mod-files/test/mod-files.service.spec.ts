import { Test, TestingModule } from '@nestjs/testing';
import { ModFilesService } from '../mod-files.service';

describe('ModFilesService', () => {
  let service: ModFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModFilesService],
    }).compile();

    service = module.get<ModFilesService>(ModFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
