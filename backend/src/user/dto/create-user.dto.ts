import { IsString } from 'class-validator';

export class CreateUserDTO {

  @IsString()
  name: string;
  
  @IsString()
  email: string;
  
  @IsString()
  password: string;
  
  @IsString()
  image_url: string;

  @IsString()
  description: string;
}