import { IsEmail, IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  userName: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
