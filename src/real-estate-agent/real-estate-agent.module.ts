import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealEstateAgentService } from './real-estate-agent.service';
import { RealEstateAgentController } from './real-estate-agent.controller';
import { RealEstateAgent } from './entities/real-estate-agent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RealEstateAgent])],
  controllers: [RealEstateAgentController],
  providers: [RealEstateAgentService],
})
export class RealEstateAgentModule {}
