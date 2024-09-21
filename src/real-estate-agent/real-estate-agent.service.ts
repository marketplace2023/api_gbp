import { Injectable } from '@nestjs/common';
import { CreateRealEstateAgentDto } from './dto/create-real-estate-agent.dto';
import { UpdateRealEstateAgentDto } from './dto/update-real-estate-agent.dto';

@Injectable()
export class RealEstateAgentService {
  create(createRealEstateAgentDto: CreateRealEstateAgentDto) {
    return 'This action adds a new realEstateAgent';
  }

  findAll() {
    return `This action returns all realEstateAgent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} realEstateAgent`;
  }

  update(id: number, updateRealEstateAgentDto: UpdateRealEstateAgentDto) {
    return `This action updates a #${id} realEstateAgent`;
  }

  remove(id: number) {
    return `This action removes a #${id} realEstateAgent`;
  }
}
