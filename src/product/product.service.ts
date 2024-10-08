import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async createProduct(name: string, price: number): Promise<Product> {
    const newProduct = new this.productModel({ name, price });
    return newProduct.save();
  }

  async findProductByName(name: string): Promise<Product> {
    return this.productModel.findOne({ name }).exec();
  }
}
