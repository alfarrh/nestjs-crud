import { Injectable } from '@nestjs/common';
import SignInDTO from 'src/database/DTO/singIn.dto';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/database/DTO/user.dto';
import IUser from 'src/modules/user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async signIn(signInDTO: SignInDTO) {
    const user = await this.updateUser(
      await this.usersService.findOne(signInDTO.userName),
      signInDTO,
    );

    //create new session
    const payload = { sub: user.id, userName: user.userName };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
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
}
