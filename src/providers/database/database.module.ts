import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import AccessRepository from 'src/database/repos/access.repository';
import UserRepository from 'src/database/repos/user.repository';
import { ClientService } from 'src/database/client.service';

@Module({
  providers: [DatabaseService, ClientService, AccessRepository, UserRepository],
  exports: [DatabaseService],
})
export class DatabaseModule {}
