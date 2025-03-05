import { Injectable } from '@nestjs/common';
import AccessRepository from 'src/database/repos/access.repository';
import UserRepository from 'src/database/repos/user.repository';

@Injectable()
export class DatabaseService {
  constructor(
    public readonly user: UserRepository,
    public readonly permissions: AccessRepository,
  ) {}
}
