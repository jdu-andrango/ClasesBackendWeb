import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { create } from 'domain';
import { response } from 'express';
import { ProductsService } from './products.service';
import { Product } from './interface/products.interface';

@Controller('products')
export class ProductsController {


    constructor(private readonly productsService:ProductsService){

    }

    @Get('servicio')
    traerTodo(): Product[]{
        return this.productsService.getAll()
    }

    //@Get()
    //getHelloInProducts(): string {
    //    return 'prueba de products controler'
    //}

    //@Get('hot')
    //getspecialProducts(): string {
    //    return 'te vamos a mostrar los productos'
    //}
    //@Get(':id')
    //find(@Param() params){
    //    return `bien ${params.id}`
    //}
    //@Get(':id/:size')
    //getspecialProductsDos(@Param() params) {
    //    return `bien ${params.id} talla ${params.size}`
    //}
    // @Get(':id')
    // getspecialProductsNumero(@Param('id') id:number){
    //     return `bien el llamado del id solo id ${id}`
    // }

    //@Get(':id/:size')
    //getspecialProductsDosParam(@Param('id') id: number, @Param('size') size: number) {
    //    return `bien ${id} talla ${size}`
    //}


    // comienzo de la creacion de los metodos post (enviar)

    //@Post('')
    //postNombre(@Param('enviar') enviar: string): string {
    //    return 'saludo de la peticion post'
    //}
    //@Post('')
    //postBody(@Body() body) {
    //    return `este es el body ${body.name} con descripcion ${body.description}`
    //}

    //@Post('datos')
    //postBodyEjemplo(@Body('name') name: string, @Body('descripcion') description: string) {
    //    return `este es el body ${name} con descripcion ${description}`
    //}

    //@Post('creacion')
    //@HttpCode(204)
    //metodoHttp(@Body() body) {
    //    return body
    //}
    //@Post('peticion')
    //@HttpCode(HttpStatus.NO_CONTENT)
    //crearProductoHttp(@Body() body) {
    //    return body
    //}
    // error
    //@Post('ruta-error-404')
    //@HttpCode(HttpStatus.NOT_FOUND)
    //errorHttp() {
    //    return 'este es un error en las rutas 404'
    //}

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

//    @Get(':id')
//    find3(@Res() response, @Param('id') id: number) {
//        if (id >= 100) {
//            return response.status(HttpStatus.NOT_FOUND).send(`no existe ${id}`)
//       } else if (id >= 50 && id <= 99) {
//            return response.status(HttpStatus.ACCEPTED).send(`mensaje 1`)
//        } else if (id >= 0 && id <= 49) {
//            return response.status(HttpStatus.CREATED).send(`mensaje 2 `)
//        }
//    }



//// ejercicio


    //@Put(':id')
    //update1(@Param('id') id: number, @Body() body) {
    //    return `Estás haciendo una operación de actualización del recurso ${id} 
    //      con ${body.name} y ${body.description}`;
    //}


    //@Patch(':id')
    //partialUpdate(@Param('id') id: number, @Body() body) {
    //  return `Actualización parcial del ítem ${id}`;
    //}


   // @Delete(':id')
   // @HttpCode(202)
   // delete1(@Param('id') id: number) {
   //     //return `Hemos borrado el producto ${id}`;
        
   // }




    // * peticiones  nuevas 

    @Get(':id')
    find(@Param('id') id: number) {
      return this.productsService.getId(id);
    }
  
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createProduct(
      @Body() body,
    ) {
      this.productsService.insert(body);
    }
  
    @Put(':id')
    update(
      @Param('id') id: number, 
      @Body() body,
    ) {
      return this.productsService.update(id, body);
    }
    
   
    @Delete(':id')
@HttpCode(202)
deleteRegreso(@Param('id') id: number) {
  const remainingProductsBefore = this.productsService.getAll();
  this.productsService.delete(id);
  const remainingProductsAfter = this.productsService.getAll();
  
  if (remainingProductsBefore.length > remainingProductsAfter.length) {
    return { message: '¡Producto eliminado con éxito!', remainingProducts: remainingProductsAfter };
  } else {
    return { message: '¡No hay un producto con ese ID para borrar!', remainingProducts: remainingProductsAfter };
  }
}
    
  
    //@Delete(':id')
    //@HttpCode(HttpStatus.NO_CONTENT)
    //delete(@Param('id') id: number) {
    //  this.productsService.delete(id);
    //}

   

}
