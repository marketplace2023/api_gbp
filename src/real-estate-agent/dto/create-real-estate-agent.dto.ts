export class CreateRealEstateAgentDto {
  businessName: string;
  fullName: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  businessHours?: Record<string, string>;
  slogan?: string;
  establishedYear?: number;
  licenseNumber?: string;
}
