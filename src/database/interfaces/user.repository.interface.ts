import IRepository from './repository.interface';

export default interface IUserRepository<T> extends IRepository<T> {
  findAll();
  findByUsername(userName: string);
  getRoles(id: number);
}
