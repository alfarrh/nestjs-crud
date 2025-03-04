export default interface IRepository<T, K> {
  findById(id: K);
  create(data: T);
  update(id: K, data: T);
}
