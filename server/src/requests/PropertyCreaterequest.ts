import { IsString, IsNotEmpty } from 'class-validator';

export class PropertyCreateRequest {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsString()
  zip: string;

  @IsString()
  county: string;

  @IsString()
  phone: string;

  @IsString()
  type: string;

  @IsString()
  capacity: string;

  @IsString()
  images: string;

  @IsString()
  map: string;
}
