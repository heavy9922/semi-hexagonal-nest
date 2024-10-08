import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpServiceExtended } from './http.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,  // Configura Axios
      maxRedirects: 5,
    }),
  ],
  providers: [HttpServiceExtended],
  exports: [HttpServiceExtended],
})
export class CustomHttpModule { }
