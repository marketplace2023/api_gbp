import { PartialType } from '@nestjs/mapped-types';
import { CreateRealEstateAgentDto } from './create-real-estate-agent.dto';

export class UpdateRealEstateAgentDto extends PartialType(CreateRealEstateAgentDto) {}
