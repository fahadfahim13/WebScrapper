import { IsString, IsNotEmpty } from 'class-validator';

export class PropertySearchRequest {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsNotEmpty()
  value: string | number;
}
