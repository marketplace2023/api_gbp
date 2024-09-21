import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RealEstateAgentService } from './real-estate-agent.service';
import { CreateRealEstateAgentDto } from './dto/create-real-estate-agent.dto';
import { UpdateRealEstateAgentDto } from './dto/update-real-estate-agent.dto';

@Controller('real-estate-agent')
export class RealEstateAgentController {
  constructor(private readonly realEstateAgentService: RealEstateAgentService) {}

  @Post()
  create(@Body() createRealEstateAgentDto: CreateRealEstateAgentDto) {
    return this.realEstateAgentService.create(createRealEstateAgentDto);
  }

  @Get()
  findAll() {
    return this.realEstateAgentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.realEstateAgentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRealEstateAgentDto: UpdateRealEstateAgentDto) {
    return this.realEstateAgentService.update(+id, updateRealEstateAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.realEstateAgentService.remove(+id);
  }
}
