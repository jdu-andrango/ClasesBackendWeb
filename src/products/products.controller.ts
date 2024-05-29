import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { create } from 'domain';
import { response } from 'express';

@Controller('products')
export class ProductsController {

    @Get()
    getHelloInProducts():string{
        return 'prueba de products controler'
    }

    @Get('hot')
    getspecialProducts():string{
        return 'te vamos a mostrar los productos'
    }
    //@Get(':id')
    //find(@Param() params){
    //    return `bien ${params.id}`
    //}
    @Get(':id/:size')
    getspecialProductsDos(@Param() params){
        return `bien ${params.id} talla ${params.size}`
    }
   // @Get(':id')
   // getspecialProductsNumero(@Param('id') id:number){
   //     return `bien el llamado del id solo id ${id}`
   // }

    @Get(':id/:size')
    getspecialProductsDosParam(@Param('id')id:number, @Param('size') size:number ){
        return `bien ${id} talla ${size}`
    }


    // comienzo de la creacion de los metodos post (enviar)

    @Post('')
    postNombre(@Param('enviar')enviar:string):string{
        return 'saludo de la peticion post'
    }
    @Post('')
    postBody(@Body()body){
        return `este es el body ${body.name} con descripcion ${body.descripcion}`
    }

    @Post('datos')
    postBodyEjemplo(@Body('name') name:string, @Body('descripcion') descripcion:string){
        return `este es el body ${name} con descripcion ${descripcion}`
    }

    @Post('creacion')
    @HttpCode(204)
    metodoHttp(@Body() body){
        return body
    }
    @Post('peticion')
    @HttpCode(HttpStatus.NO_CONTENT)
    crearProductoHttp(@Body() body){
        return body
    }
    // error
    @Post('ruta-error-404')
    @HttpCode(HttpStatus.NOT_FOUND)
    errorHttp(){
        return 'este es un error en las rutas 404'
    }

    //desarrolloweb.com

 //   @Get(':id')
 //   find2(@Res() response, @Param('id') id: number){
 //       if(id<100){
 //           return response.status(HttpStatus.OK).send(`pagina del producto ${id}`)
 //       }else{
 //           return response.status(HttpStatus.NOT_FOUND).send(`producto inexistente`)
 //       }
 //   }


///que los menores de 49 

    @Get(':id')
    find3(@Res() response, @Param('id') id: number){
        if(id>=100){
            return response.status(HttpStatus.NOT_FOUND).send(`no existe ${id}`)
        }else if(id>=50 && id<=99){
            return response.status(HttpStatus.ACCEPTED).send(`mensaje 1`)
        }else if(id>=0 && id<=49){
            return response.status(HttpStatus.CREATED).send(`mensaje 2 `)
        }
    }

}
