import { Injectable } from '@nestjs/common';
import SignInDTO from 'src/database/dto/singIn.dto';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/database/dto/user.dto';
import IUser from 'src/modules/user/interfaces/user.interface';
import { DatabaseService } from 'src/providers/database/database.service';
import { Role } from 'src/common/enum/role.enum';
import { PermissionDTO } from 'src/database/dto/permission.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private db: DatabaseService,
  ) {}
  async signIn(signInDTO: SignInDTO) {
    const user = await this.updateUser(
      await this.usersService.findByUsername(signInDTO.userName),
      signInDTO,
    );

    //create new session
    const payload = { sub: user.id, userName: user.userName };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async givePermission(permissionDTO: PermissionDTO): Promise<string> {
    if (permissionDTO.userRoles.includes(permissionDTO.idGroup)) {
      return 'User has permition';
    }

    await this.db.permissions.giveAccess(
      permissionDTO.idUser,
      permissionDTO.idGroup,
    );

    return 'Permission granted';
  }

  async revokePermission(permissionDTO: PermissionDTO): Promise<string> {
    if (!permissionDTO.userRoles.includes(permissionDTO.idGroup)) {
      return 'User has no permition';
    }

    await this.db.permissions.revokeAccess(
      permissionDTO.idUser,
      permissionDTO.idGroup,
    );

    return 'Permission revoked';
  }

  private async updateUser(user: IUser, signInDTO: SignInDTO): Promise<IUser> {
    //if user isn't on database, create new user
    if (user === null) {
      user = await this.usersService.create(signInDTO as UserDTO);
    } else if (user.name === null || user.email === null) {
      user = await this.usersService.update(user.id, signInDTO as UserDTO);
    }

    return user;
  }

  private async;
}
