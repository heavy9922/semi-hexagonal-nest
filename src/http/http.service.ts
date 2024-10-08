import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosInstance } from 'axios';

@Injectable()
export class HttpServiceExtended {
    private readonly axiosInstance: AxiosInstance;

    constructor(private readonly httpService: HttpService) {
        this.axiosInstance = this.httpService.axiosRef;  // Usa axiosRef para obtener la instancia
    }

    async getDataFromApi(url: string) {
        const response = await this.axiosInstance.get(url);
        return response.data;
    }
}
