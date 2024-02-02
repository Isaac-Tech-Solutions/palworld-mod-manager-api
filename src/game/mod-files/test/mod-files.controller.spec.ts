import { Test, TestingModule } from '@nestjs/testing';
import { ModFilesController } from '../mod-files.controller';

describe('ModFilesController', () => {
  let controller: ModFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModFilesController],
    }).compile();

    controller = module.get<ModFilesController>(ModFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
