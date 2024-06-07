import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AppController } from 'src/app.controller';
import { ProductsController } from './products.controller';

@Module({})
export class ProductsModule {
    imports: []
    controllers: [AppController, ProductsController]
    providers: [ ProductsService]
}
