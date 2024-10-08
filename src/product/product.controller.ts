import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async createProduct(
        @Body() createProductDto: { name: string; price: number },
    ): Promise<Product> {
        const { name, price } = createProductDto;
        return this.productService.createProduct(name, price);
    }

    @Get(':name')
    async findProductByName(@Param('name') name: string): Promise<Product> {
        return this.productService.findProductByName(name);
    }
}
