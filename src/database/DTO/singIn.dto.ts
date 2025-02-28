import { IsEmail, IsString } from 'class-validator';
export default class SignInDTO {
  @IsString()
  userName: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
