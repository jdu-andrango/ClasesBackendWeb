/* eslint-disable prettier/prettier */
import {  IsString , IsBoolean} from "class-validator";
export class CategoriaDto{
    @IsString()
    readonly nombre:string;
    @IsString()
    readonly descripcion: string;
    @IsBoolean()
    readonly stok: boolean;
}