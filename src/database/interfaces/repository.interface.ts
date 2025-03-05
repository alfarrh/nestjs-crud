export default interface IRepository<T> {
  findById(id: number);
  create(data: T);
  update(id: number, data: T);
}
