/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorias } from './categoria/categorias.interface';
import { CategoriaDto } from './dto/categoria.dto';
import { CatergoriaPatchDto } from './dto/categoria-patch.dto';
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

    crearDatos(categoriaDto: CategoriaDto): Categorias[] {
        const nuevaCategoria: Categorias = {
            id: this.categorias.length + 1,
            ...categoriaDto
        };
        this.categorias.push(nuevaCategoria);
        return this.categorias;
    }
    getId(id: number): Categorias {
        const categoria = this.categorias.find((item) => item.id === id);
        if (!categoria) {
          throw new NotFoundException('Categoria not found');
        }
        return categoria;
      }

    patch(id: number, body: CatergoriaPatchDto): Categorias[] {
        const previousCategoria = this.getId(id);
        const updatedCategoria: Categorias = {
          ...previousCategoria,
          ...body,
        };
        this.categorias = this.categorias.map((item) =>
          item.id === id ? updatedCategoria : item,
        );
        return this.categorias;
      }

}
