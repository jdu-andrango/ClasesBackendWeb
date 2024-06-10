/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Contactos } from './interface/llamadas.interface';
import { Repository } from 'typeorm';
import { Contacto } from './entities/llamada.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LlamadaService {
    // private contactos:Contactos[]=[
    //     {
    //         nombre:'jonathan',
    //         numero: 333333
    //     },
    //     {
    //         nombre:'david',
    //         numero: 11111111
    //     },
    //     {
    //         nombre:'marco',
    //         numero: 2222222
    //     }
    // ]

    constructor(
        @InjectRepository(Contacto)
        private readonly llamadaRepository:Repository<Contactos>
    ){

    }

    // traerDatos():Contactos[]{
    //     // console.log(this.contactos)
    //     return this.contactos
    // }
    async traerdatos1():Promise<Contactos[]>{
        return await this.llamadaRepository.find();
    }
    enviardatos():Contactos{
        return 
    }
  
}
