import IDAO from './interfaces/IDatabase';
import { PrismaClient } from '@prisma/client';

export default class DatabaseDAO extends PrismaClient implements IDAO {
  public async connect() {
    this.$connect();
  }
}
