import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class PropertyDetailsRequest {
    @IsNotEmpty()
    @IsNumber()
    id: number;
  }
  

export class PropertySearchRequest {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  value: string | number;
}
