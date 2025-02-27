import IRepository from '../interfaces/IRepository';
import IUser from 'src/modules/user/interfaces/IUser';
import { UserDTO } from '../DTO/user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class UserRepository
  extends PrismaClient
  implements IRepository<UserDTO, number>
{
  async findAll(): Promise<IUser[]> {
    const users: IUser[] = (await this.user.findMany()).map((user) => ({
      id: user.idUser,
      name: user.name,
      email: user.email,
      userName: user.userName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));

    return users;
  }

  async find(id: number): Promise<IUser | null> {
    const user = await this.user.findUnique({ where: { idUser: id } });

    return {
      id: user.idUser,
      name: user.name,
      email: user.email,
      userName: user.userName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async create(userDTO: UserDTO): Promise<IUser> {
    const user = await this.user.create({ data: userDTO });

    return {
      id: user.idUser,
      name: user.name,
      email: user.email,
      userName: user.userName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async update(id: number, userDTO: UserDTO): Promise<IUser> {
    const user = await this.user.update({
      where: { idUser: id },
      data: userDTO,
    });

    return {
      id: user.idUser,
      name: user.name,
      email: user.email,
      userName: user.userName,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
