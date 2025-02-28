import IRepository from './IRepository';

export default interface IUserRepository<T, K> extends IRepository<T, K> {
  findAll();
  findOne(userName: string);
}
