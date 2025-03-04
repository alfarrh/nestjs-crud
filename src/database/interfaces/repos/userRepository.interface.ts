import IRepository from './repository.interface';

export default interface IUserRepository<T, K> extends IRepository<T, K> {
  findAll();
  findByUsername(userName: string);
}
