import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealEstateAgentModule } from './real-estate-agent/real-estate-agent.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'gbpseolocal',
    entities: [],
    synchronize: true,
  }), RealEstateAgentModule,],
  
})
export class AppModule {}
