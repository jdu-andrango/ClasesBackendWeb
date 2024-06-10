/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Poll } from './pol.entity';
import { ProductsController } from './products/products.controller';
import { CustomersController } from './customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';

import { ProductsService } from './products/products.service';
import { LlamadaModule } from './llamada/llamada.module';
import { CategoriasModule } from './categorias/categorias.module';
import { Contacto } from './llamada/entities/llamada.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'kan',
      password: '123',
      database: 'mydb',
      entities: [Contacto],
      synchronize: true,
    }),
    LlamadaModule,
    CategoriasModule,

  ],
  controllers: [AppController, ProductsController, CustomersController, UsersController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
