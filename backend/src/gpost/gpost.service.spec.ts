import { Test, TestingModule } from '@nestjs/testing';
import { GpostService } from './gpost.service';

describe('GpostService', () => {
  let service: GpostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpostService],
    }).compile();

    service = module.get<GpostService>(GpostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
