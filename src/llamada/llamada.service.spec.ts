/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { LlamadaService } from './llamada.service';

describe('LlamadaService', () => {
  let service: LlamadaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LlamadaService],
    }).compile();

    service = module.get<LlamadaService>(LlamadaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
