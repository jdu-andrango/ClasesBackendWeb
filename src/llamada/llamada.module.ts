import { TypeOrmModule } from '@nestjs/typeorm';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LlamadaController } from './llamada.controller';
import { LlamadaService } from './llamada.service';
import { Contacto } from "./entities/llamada.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([Contacto])
  ],
  controllers: [LlamadaController],
  providers: [LlamadaService]
})
export class LlamadaModule {}
