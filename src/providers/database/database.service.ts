import { Injectable, OnModuleInit } from '@nestjs/common';
import DAO from 'src/database/dao';
import UserRepository from 'src/database/prisma/repos/user.repository';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(public readonly user: UserRepository) {}

  async onModuleInit() {
    await new DAO().connect();
  }
}
