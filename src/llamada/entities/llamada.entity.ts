/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Contacto {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string

    @Column()
    numero:number
}