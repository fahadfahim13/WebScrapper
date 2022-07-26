import { IsString, IsNotEmpty } from 'class-validator';

export class PropertyCreateRequest {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  zip: string;

  @IsNotEmpty()
  county: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  capacity: string;

  @IsNotEmpty()
  images: string;

  @IsNotEmpty()
  map: string;
}
