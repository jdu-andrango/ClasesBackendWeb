import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interface/products.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class ProductsService {

 // constructor(
 //   @InjectRepository(Products)
 //   private productRepository: Repository<Product>,
 // ) {}
 // async create(productData: Product): Promise<Product> {
 //   const newProduct = this.productRepository.create(productData);
  //  return this.productRepository.save(newProduct);
 // }

    public products : Product []= [
        {
          id: 1,
          name: 'Vela aromática',
          description: 'Esta vela lanza ricos olores',
        },
        {
          id: 2,
          name: 'Marco de fotos pequeño',
          description: 'Marco ideal para tus fotos 10x15',
        },
        {
          id: 3,
          name: 'numero diez ',
          description: 'Marco ideal para tus fotos 10x15',
        }
      ];
      
      getAll(): Product[] {
        this.products.forEach((items)=>{
          console.log(items)
        })
        
        return this.products;


      }
      //insert(product:Product) {
      //  this.products = 
      //  [
      //    ...this.products,product
      //  ];
      //}


      // create(product:Product) {
      //  this.products = 
      //  [
      //    ...this.products,product
      //  ];
      //}

   //   getId(id: number): Product {
   //     return this.products.find( (item: Product) => item.id == id);
   //   }
    
   //   insert(body: any) {
   //     this.products = [
   //       ...this.products,
    //      {
   //         id: this.lastId() + 1,
   //         name: body.name,
   //         description: body.description,
   //     
   //       }
          
   //     ];
   //     console.log( body.name, body.descripcion)
   //     console.log(this.products)
   //   }
    
      //update(id: number, body: any) {
      //  let product: Product = {
      //    id,
      //    name: body.name,
      //    description: body.description,
      //  }
      //  this.products = this.products.map( (item: Product) => {
      //    console.log(body.name, item.name == body.name ,item.name);
      //    return item.id == id ? product : item;
      //  });
      //}


     
    

      



     // delete(id: number) {
     //   this.products = this.products.filter( (item: Product) => item.id != id );
     // }
    //
    //  private lastId(): number {
    //    return this.products[this.products.length - 1].id;
    //  }

    

    //  remove(id: number) {
    //   this.products = this.products.filter( (item: Product) => item.id != id );
    //  }
    //
    //  private lastId(): number {
    //    return this.products[this.products.length - 1].id;
    //  }


//}
//function InjectRepositori(target: typeof ProductsService, propertyKey: undefined, parameterIndex: 0): void {
//  throw new Error('Function not implemented.');
//}

getId(id: number): Product {
  const product = this.products.find( (item: Product) => item.id == id);
  if(product) {
    return product;
  } else {
    //throw new NotFoundException(`No encontramos el producto ${id}, producto no encotrado,`,);
    throw new HttpException(`No existe el producto ${id} estamos mal`, HttpStatus.NOT_FOUND);
  }
}

remove(id: number): void {
  const productIndex = this.products.findIndex((item: Product) => item.id === id);
  if (productIndex !== -1) {
    this.products.splice(productIndex, 1);
  } else {
    throw new HttpException(`No existe el producto con ID ${id}`, HttpStatus.NOT_FOUND);
  }
}

private lastId(): number {
  return this.products.length > 0 ? this.products[this.products.length - 1].id : 0;
}

update(id: number, body: any): void {
  const productIndex = this.products.findIndex((item: Product) => item.id === id);
  if (productIndex !== -1) {
    let product: Product = {
      id,
      name: body.name,
      description: body.description,
    };
    this.products[productIndex] = product;
  } else {
    throw new HttpException(`No existe el producto con ID ${id}`, HttpStatus.NOT_FOUND);
  }
}

create(product: Product): void {
  const existingProduct = this.products.find((p: Product) => p.name === product.name);
  if (existingProduct) {
    throw new HttpException(`Ya existe un producto con el nombre ${product.name}`, HttpStatus.CONFLICT);
  }
  
  const newProduct: Product = {
    id: this.lastId() + 1,
    name: product.name,
    description: product.description,
  };
  this.products.push(newProduct);
}



    }
