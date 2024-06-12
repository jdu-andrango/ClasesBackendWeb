/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { CategoriaDto } from "./categoria.dto";

export class CatergoriaPatchDto extends PartialType(CategoriaDto){
    
}