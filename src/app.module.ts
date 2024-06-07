import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './pol.entity';
import { CustomersController } from './customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';

import { ProductsModule } from './products/products.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'conexion',
      entities: [Poll],
      synchronize: true,
    }),
    ProductsModule,
    TagsModule,

  ],
  controllers: [AppController, CustomersController, UsersController],
  providers: [AppService],
})
export class AppModule {}
