import { IsString } from 'class-validator';

export class CreateGpostDTO {
  @IsString()
  publication_date: Date;
  
  @IsString()
  user_id: string;
  
  @IsString()
  image_url: string;
  
  @IsString()
  content: string;
}