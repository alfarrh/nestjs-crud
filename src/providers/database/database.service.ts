import {
  HttpException,
  HttpStatus,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import DAO from 'src/database/dao';
import UserRepository from 'src/database/prisma/repos/user.repository';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(public readonly user: UserRepository) {}

  async onModuleInit() {
    try {
      await new DAO().connect();
    } catch (error) {
      throw new HttpException(
        'Fail to connect to the database',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
