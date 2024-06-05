import { Injectable } from '@nestjs/common';
import { Product } from './interface/products.interface';

@Injectable()
export class ProductsService {
    private products : Product []= [
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


      getId(id: number): Product {
        return this.products.find( (item: Product) => item.id == id);
      }
    
      insert(body: any) {
        this.products = [
          ...this.products,
          {
            id: this.lastId() + 1,
            name: body.name,
            description: body.description,
        
          }
          
        ];
        console.log( body.name, body.descripcion)
        console.log(this.products)
      }
    
      update(id: number, body: any) {
        let product: Product = {
          id,
          name: body.name,
          description: body.description,
        }
        this.products = this.products.map( (item: Product) => {
          console.log(body.name, item.name == body.name ,item.name);
          return item.id == id ? product : item;
        });
      }


     
    

      



      delete(id: number) {
        this.products = this.products.filter( (item: Product) => item.id != id );
      }
    
      private lastId(): number {
        return this.products[this.products.length - 1].id;
      }

    
}
