import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { ExternalService } from "./external.service";

@Injectable()
export class CronbService{
   
    constructor(private readonly external: ExternalService){}
   
    
   
     @Cron( '*/30 * * * * * ' )
     processo() {
        this.external.request()
    }

    // conectarte a una base de  DB * tirara un peticion *
}

   

//     constructor(@InjectRepository(noticia)  private  noticiaRepository: Repository<noticia>){}

//     createNoticia(noticia){
//       const newNoticia = this.noticiaRepository.create(noticia)
//       return this.noticiaRepository.save(newNoticia)
//     }
//       // createExternal(noticias: CreateNoticiasDto){
//       //    const newNoticias = this.noticiasRepository.create(noticias)
//       //    return this.noticiasRepository.save(newNoticias)
         
//       // }

// }
