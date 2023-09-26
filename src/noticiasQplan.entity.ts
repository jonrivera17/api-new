import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'noticias_qplan'})
export class NoticiasQplan {
  @PrimaryGeneratedColumn({
    name: 'noticias_qplan_id'
  })
  noticias_qplan_id: number;

  @Column({name: 'ctime' , type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  ctime: Date;

  @Column({name: 'fecha_publicacion' , type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  fecha_publicacion: Date;

  @Column({name: 'titulo'})
  titulo: string;

  @Column({name: 'subtitulo'})
  subtitulo: string;

  @Column({name: 'contenido'})
  contenido: string;

  @Column({name: 'url'})
  url: string
  
  @Column({name: 'url_imagen'})
  url_imagen: string;

  @Column({name: 'sitio'})
  sitio: string;

  @Column({name: 'estatus'})
  estatus: number;

}