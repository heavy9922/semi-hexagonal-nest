import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '172.168.30.115',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'mydb',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // Solo para desarrollo
};
