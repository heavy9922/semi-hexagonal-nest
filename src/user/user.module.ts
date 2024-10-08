import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Importa la entidad
  providers: [UserService, UserRepository],    // Proveedor del servicio y repositorio
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule { }