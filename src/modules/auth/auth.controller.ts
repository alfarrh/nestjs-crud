import { AuthService } from './auth.service';
import { Post, Controller, Body } from '@nestjs/common';
import SignInDTO from 'src/database/dto/singIn.dto';

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  signIn(@Body() signInDTO: SignInDTO) {
    return this.authService.signIn(signInDTO);
  }
}
