import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import UserRepository from 'src/database/repos/user.repository';

@Module({
  providers: [DatabaseService, UserRepository],
  exports: [DatabaseService],
})
export class DatabaseModule {}
