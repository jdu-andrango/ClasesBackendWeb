/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { LlamadaService } from './llamada.service';
import { Contactos } from './interface/llamadas.interface';

@Controller('llamada')
export class LlamadaController {

    constructor(private readonly servicioDeLaLLamada:LlamadaService){

    }

    // @Get()
    // traerDatosDelServicio():Contactos[]{
    //     console.log(this.servicioDeLaLLamada)
    //     return this.servicioDeLaLLamada.traerDatos()
    // }

    @Get()
    async traerDatosDelServicio2():Promise<Contactos[]>{
        return await this.servicioDeLaLLamada.traerdatos1()
    }

}
