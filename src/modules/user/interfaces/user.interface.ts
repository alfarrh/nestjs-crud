export default interface IUser {
  id: number;
  userName: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  roles: [];
}
