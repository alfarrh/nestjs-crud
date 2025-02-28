export default interface IRepository<T, K> {
  find(id: K);
  create(data: T);
  update(id: K, data: T);
}
