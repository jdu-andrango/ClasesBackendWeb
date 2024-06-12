/* eslint-disable prettier/prettier */

import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriaDto } from './dto/categoria.dto';
import { CatergoriaPatchDto } from './dto/categoria-patch.dto';


@Controller('categorias')
export class CategoriasController {

    constructor(private readonly categoriaService:CategoriasService ){

    }

    @Get()
    traerCategorias(){
        return this.categoriaService.traerCategorias()
    }


    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    crearDatos(
    @Body() categoriaDto: CategoriaDto,
    ) {
    this.categoriaService.crearDatos(categoriaDto);
    }

    @Patch(':id')
    async patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CatergoriaPatchDto,
    ) {
    return this.categoriaService.patch(id, body);
    }



}
