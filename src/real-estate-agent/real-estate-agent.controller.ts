import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RealEstateAgentService } from './real-estate-agent.service';
import { CreateRealEstateAgentDto } from './dto/create-real-estate-agent.dto';
import { UpdateRealEstateAgentDto } from './dto/update-real-estate-agent.dto';
import { RealEstateAgent } from './entities/real-estate-agent.entity';

@Controller('real-estate-agent')
export class RealEstateAgentController {
  constructor(
    private readonly realEstateAgentService: RealEstateAgentService,
  ) {}

  // Crear un agente inmobiliario
  @Post()
  create(
    @Body() createRealEstateAgentDto: CreateRealEstateAgentDto,
  ): Promise<RealEstateAgent> {
    return this.realEstateAgentService.create(createRealEstateAgentDto);
  }

  // Obtener todos los agentes inmobiliarios
  @Get()
  findAll(): Promise<RealEstateAgent[]> {
    return this.realEstateAgentService.findAll();
  }

  // Obtener un agente inmobiliario por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<RealEstateAgent> {
    return this.realEstateAgentService.findOne(+id);
  }

  // Actualizar un agente inmobiliario
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRealEstateAgentDto: UpdateRealEstateAgentDto,
  ): Promise<RealEstateAgent> {
    return this.realEstateAgentService.update(+id, updateRealEstateAgentDto);
  }

  // Eliminar un agente inmobiliario
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.realEstateAgentService.remove(+id);
  }
}
