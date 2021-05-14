import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDTO {

  @IsString()
  name: string;
  
  @IsString()
  username: string;
  
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  password: string;
  
  @IsString()
  image_url: string;

  @IsString()
  description: string;
}