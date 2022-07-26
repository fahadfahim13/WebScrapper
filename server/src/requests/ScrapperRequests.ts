import { IsString, IsNotEmpty } from 'class-validator';

export class LoadUrlRequest {
    @IsNotEmpty()
    @IsString()
    url: string;
  }

  
export class SearchScrapperRequest {
    @IsNotEmpty()
    @IsString()
    search: string;
  }
  
