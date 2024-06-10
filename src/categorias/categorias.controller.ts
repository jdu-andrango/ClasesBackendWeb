/* eslint-disable prettier/prettier */

import { Controller, Get } from '@nestjs/common';
import { CategoriasService } from './categorias.service';


@Controller('categorias')
export class CategoriasController {

    constructor(private readonly categoriaService:CategoriasService ){

    }

    @Get()
    traerCategorias(){
        return this.categoriaService.traerCategorias()
    }


}
