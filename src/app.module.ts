import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CustomHttpModule } from './http/http.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseConfig } from './config/mongoose.config';


@Module({
  imports: [UserModule, ProductModule, CustomHttpModule, TypeOrmModule.forRoot(typeOrmConfig), MongooseModule.forRoot(mongooseConfig.uri),],
  controllers: [],
  providers: [],
})
export class AppModule { }
