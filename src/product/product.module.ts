import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductSchema } from './product.schema'; // Importa el esquema de Mongoose

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]), // Registra el modelo aquí
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule { }
