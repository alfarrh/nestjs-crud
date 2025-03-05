import IUser from '../interfaces/user.interface';

export class User implements IUser {
  constructor(
    id: number,
    userName: string,
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.userName = userName;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.roles = [];
  }

  id: number;
  userName: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  roles: [];
}
