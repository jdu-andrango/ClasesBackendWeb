import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get('query')
    rutaQuery(@Query() query) {
        //return query;
        return `El dato query.x ha recibido el valor ${query.x}`;
    }


    //@Get('cars')
    //carsQuery(@Query('count') carCount: number) {
    //    return carCount;
    //}

    @Get('cars')
    carsQuery(@Query('count', ParseIntPipe) carCount: number) {
        return carCount;
    }
}
