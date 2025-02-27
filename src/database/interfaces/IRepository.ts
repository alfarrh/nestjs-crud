export default interface IRepository<T, K> {
  findAll();
  find(id: K);
  create(data: T);
  update(id: K, data: T);
}
