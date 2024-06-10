/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Categorias } from './categoria/categorias.interface';

@Injectable()
export class CategoriasService {

    private categorias:Categorias[]=[
        {
            id:1,
            nombre:'jonathan',
            descripcion:'todo muy bien',
            stok:true
        },
        {
            id:2,
            nombre:'david',
            descripcion:'todo muy mal',
            stok:false
        },
        {
            id:3,
            nombre:'marco',
            descripcion:'intermedio',
            stok:false
        }
    ]
    

    traerCategorias():Categorias[]{
        return this.categorias
    }



}
