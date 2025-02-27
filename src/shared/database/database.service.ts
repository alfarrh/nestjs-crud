import { Injectable, OnModuleInit } from '@nestjs/common';
import DatabaseDAO from 'src/database/database.dao';
import UserRepository from 'src/database/repos/user.repository';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(public readonly user: UserRepository) {}

  async onModuleInit() {
    await new DatabaseDAO().connect();
  }
}
