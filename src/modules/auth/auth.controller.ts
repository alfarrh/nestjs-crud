import { AuthService } from './auth.service';
import { Delete, Post, Controller, Body } from '@nestjs/common';
import { PermissionDTO } from 'src/database/dto/permission.dto';
import SignInDTO from 'src/database/dto/singIn.dto';

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  signIn(@Body() signInDTO: SignInDTO) {
    return this.authService.signIn(signInDTO);
  }

  @Post('access')
  givePermission(@Body() permissionDTO: PermissionDTO) {
    return this.authService.givePermission(permissionDTO);
  }

  @Delete('access')
  revokePermission(@Body() permissionDTO: PermissionDTO) {
    return this.authService.revokePermission(permissionDTO);
  }
}
