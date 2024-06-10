/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { LlamadaController } from './llamada.controller';

describe('LlamadaController', () => {
  let controller: LlamadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LlamadaController],
    }).compile();

    controller = module.get<LlamadaController>(LlamadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
