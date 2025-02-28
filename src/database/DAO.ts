import IDAO from './interfaces/dao.interface';
import { PrismaClient } from '@prisma/client';

export default class DAO extends PrismaClient implements IDAO {
  public async connect() {
    this.$connect();
  }
}
