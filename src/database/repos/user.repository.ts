import IUser from 'src/modules/user/interfaces/IUser';
import { UserDTO } from '../DTO/UserDTO';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import IUserRepository from '../interfaces/repos/IUserRepository';

@Injectable()
export default class UserRepository
  extends PrismaClient
  implements IUserRepository<UserDTO, number>
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

  async findOne(userName: string): Promise<IUser | null> {
    const user = await this.user.findUnique({ where: { userName } });

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
