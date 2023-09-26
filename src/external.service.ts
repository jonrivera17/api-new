import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { catchError, lastValueFrom, map } from "rxjs";
import { InjectRepository } from "@nestjs/typeorm";
import { NoticiasQplan } from "./noticiasQplan.entity";
import { Repository } from "typeorm";


@Injectable()
export class ExternalService{
    CreateService() {
      throw new Error('Method not implemented.');
    }
   
    constructor(
        private http: HttpService,  
        @InjectRepository(NoticiasQplan) private readonly noticiaRepository: Repository<NoticiasQplan>
    ){}

    async request(){
        const endpoint = `https://newsapi.org/v2/top-headlines?country=mx&category=entertainment&apiKey=0a6a925ca1454ac08f7fa5935b52b40b&pageSize=10`
        const request = this.http.get(endpoint)
            .pipe(map((res) => res.data))
            .pipe(
                catchError((_err) => {
                    const errorMessage: any = {
                    };
                    throw new InternalServerErrorException(errorMessage);
                }),
            );    
        const response: any = await lastValueFrom(request);
        console.log(response)
    }
    
    processData(list: any){
        list.articles.map((noticia: { source: any; author: any; title: any; description: any; url: any; urlToImage: any; publishedAt: any; content: any; }) => {
            const source = noticia.source;
            const author = noticia.author;
            const title = noticia.title; 
            const description = noticia.description;
            const url = noticia.url;
            const urlToImage = noticia.urlToImage;
            const publishedAt = noticia.publishedAt;
            const content = noticia.content;   
            
            this.create.prototype(title, description, description, urlToImage, url, 1, url )
        });
    }

    async create(title: string, subtitulo: string, contenido: string, url_imagen: string, sitio: string, estatus: number, url: string){
        
        const noticia = new NoticiasQplan(); 
        noticia.ctime =  new Date();
        noticia.fecha_publicacion = new Date();
        noticia.titulo = title;
        noticia.subtitulo = subtitulo;
        noticia.contenido = contenido;
        noticia.url_imagen = url_imagen;
        noticia.sitio = sitio;
        noticia.estatus = estatus;
        noticia.url = url;

        return await this.noticiaRepository.save(noticia);
    }

}