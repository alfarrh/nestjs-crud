import IUser from 'src/modules/user/interfaces/user.interface';
import { UserDTO } from '../dto/user.dto';
import { Injectable } from '@nestjs/common';
import IUserRepository from '../interfaces/user.repository.interface';
import { User } from 'src/modules/user/entities/user.entity';
import { ClientService } from '../client.service';
import { Role } from 'src/common/enum/role.enum';

@Injectable()
export default class UserRepository implements IUserRepository<UserDTO> {
  constructor(private readonly db: ClientService) {}

  async findAll(): Promise<IUser[]> {
    const users: User[] = (await this.db.user.findMany()).map(
      (user) =>
        new User(
          user.idUser,
          user.name,
          user.email,
          user.userName,
          user.createdAt,
          user.updatedAt,
        ),
    );

    return users;
  }

  async findById(id: number): Promise<IUser | null> {
    const user = await this.db.user.findUnique({ where: { idUser: id } });

    return new User(
      user.idUser,
      user.name,
      user.email,
      user.userName,
      user.createdAt,
      user.updatedAt,
    );
  }

  async findByUsername(userName: string): Promise<IUser | null> {
    const user = await this.db.user.findUnique({ where: { userName } });

    if (user === null) return null;

    return new User(
      user.idUser,
      user.name,
      user.email,
      user.userName,
      user.createdAt,
      user.updatedAt,
    );
  }

  async create(userDTO: UserDTO): Promise<IUser> {
    const user = await this.db.user.create({ data: userDTO });

    return new User(
      user.idUser,
      user.name,
      user.email,
      user.userName,
      user.createdAt,
      user.updatedAt,
    );
  }

  async update(id: number, userDTO: UserDTO): Promise<User> {
    const user = await this.db.user.update({
      where: { idUser: id },
      data: userDTO,
    });

    return new User(
      user.idUser,
      user.name,
      user.email,
      user.userName,
      user.createdAt,
      user.updatedAt,
    );
  }

  async getRoles(id: number): Promise<Role[]> {
    const roles: Role[] = (
      await this.db.userGroup.findMany({
        select: { idGroup: true },
        where: { idUser: id },
      })
    ).map((result) => result.idGroup);

    return roles;
  }
}
