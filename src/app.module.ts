
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalService } from './external.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { CronbService } from './cronb.service';
import {  NoticiasQplan } from './noticiasQplan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rivera208',
      database: 'messages',
      entities: [NoticiasQplan],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([NoticiasQplan]),
    HttpModule.register({
     timeout: 15000
    }),
    ScheduleModule.forRoot(),
    
  ],
  controllers: [AppController],
  providers: [AppService, ExternalService, CronbService, ],
})
export class AppModule {}