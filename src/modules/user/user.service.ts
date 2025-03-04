import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from '../../database/dto/user.dto';
import { DatabaseService } from 'src/providers/database/database.service';
import IUser from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private db: DatabaseService) {}

  async create(userDTO: UserDTO): Promise<IUser | null> {
    if (this.db.user.findByUsername(userDTO.userName) !== null) {
      throw new HttpException('User already exists.', HttpStatus.BAD_REQUEST);
    }

    return await this.db.user.create(userDTO);
  }

  async findAll() {
    return await this.db.user.findAll();
  }

  async findById(id: number) {
    return await this.db.user.findById(id);
  }

  async findByUsername(userName: string) {
    return await this.db.user.findByUsername(userName);
  }

  async update(id: number, userDTO: UserDTO) {
    if (this.db.user.findById(id) !== null) {
      throw new HttpException("'User don't exist.'", HttpStatus.BAD_REQUEST);
    }

    return await this.db.user.update(id, userDTO);
  }
}
