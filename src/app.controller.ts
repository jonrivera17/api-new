import { Body, Controller, Get, Param} from '@nestjs/common';
import { ExternalService } from './external.service';
import { json } from './articulos.json';



@Controller()
export class AppController {
    externalService: any;
    create: any;
    noticiaRepository: any;
  
    constructor(private readonly external: ExternalService) {}

    @Get()
    getNewApi() {
      this.external.request()
    }

    @Get('/prueba')
    getArticulo( @Param ('id') id: string){
      const newList = json;
      return this.external.processData(newList)
    }

    @Get('/pruebaCrear')
    getPrueba( ){
      
      return this.create.external;//(_title: string,  _description: string, description: string,  urlToImage: string, url: string,  estatus: number, _url: string) => 
  }
}