import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRealEstateAgentDto } from './dto/create-real-estate-agent.dto';
import { UpdateRealEstateAgentDto } from './dto/update-real-estate-agent.dto';
import { RealEstateAgent } from './entities/real-estate-agent.entity';

@Injectable()
export class RealEstateAgentService {
  constructor(
    @InjectRepository(RealEstateAgent)
    private realEstateAgentRepository: Repository<RealEstateAgent>,
  ) {}

  // Crear agente inmobiliario
  create(
    createRealEstateAgentDto: CreateRealEstateAgentDto,
  ): Promise<RealEstateAgent> {
    const agent = this.realEstateAgentRepository.create(
      createRealEstateAgentDto,
    );
    return this.realEstateAgentRepository.save(agent);
  }

  // Obtener todos los agentes inmobiliarios
  findAll(): Promise<RealEstateAgent[]> {
    return this.realEstateAgentRepository.find();
  }

  // Obtener un agente inmobiliario por ID
  findOne(id: number): Promise<RealEstateAgent> {
    return this.realEstateAgentRepository.findOne({ where: { id } });
  }

  // Actualizar un agente inmobiliario
  async update(
    id: number,
    updateRealEstateAgentDto: UpdateRealEstateAgentDto,
  ): Promise<RealEstateAgent> {
    await this.realEstateAgentRepository.update(id, updateRealEstateAgentDto);
    return this.realEstateAgentRepository.findOne({ where: { id } });
  }

  // Eliminar un agente inmobiliario
  async remove(id: number): Promise<void> {
    await this.realEstateAgentRepository.delete(id);
  }
}
