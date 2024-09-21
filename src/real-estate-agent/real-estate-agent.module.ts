import { Module } from '@nestjs/common';
import { RealEstateAgentService } from './real-estate-agent.service';
import { RealEstateAgentController } from './real-estate-agent.controller';

@Module({
  controllers: [RealEstateAgentController],
  providers: [RealEstateAgentService],
})
export class RealEstateAgentModule {}
