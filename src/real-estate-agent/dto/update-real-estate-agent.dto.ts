import { PartialType } from '@nestjs/mapped-types';
import { CreateRealEstateAgentDto } from './create-real-estate-agent.dto';

export class UpdateRealEstateAgentDto extends PartialType(
  CreateRealEstateAgentDto,
) {
  businessName?: string;
  fullName?: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  businessHours?: Record<string, string>;
  slogan?: string;
  establishedYear?: number;
  licenseNumber?: string;
}
