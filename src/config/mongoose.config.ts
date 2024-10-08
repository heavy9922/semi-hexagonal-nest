import { MongooseModuleOptions } from '@nestjs/mongoose';

export const mongooseConfig: MongooseModuleOptions = {
  uri: 'mongodb://root:pass@172.168.30.115:27017',
  dbName: 'mydb'
};
