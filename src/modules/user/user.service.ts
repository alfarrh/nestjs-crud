import { Injectable } from '@nestjs/common';
import { UserDTO } from '../../database/DTO/user.dto';
import { DatabaseService } from 'src/providers/database/database.service';

@Injectable()
export class UserService {
  constructor(private db: DatabaseService) {}

  create(userDTO: UserDTO) {
    return this.db.user.create(userDTO);
  }

  findAll() {
    return this.db.user.findAll();
  }

  find(id: number) {
    return this.db.user.find(id);
  }

  findOne(userName: string) {
    return this.db.user.findOne(userName);
  }

  update(id: number, userDTO: UserDTO) {
    return this.db.user.update(id, userDTO);
  }
}
