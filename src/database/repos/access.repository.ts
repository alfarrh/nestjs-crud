import { Injectable } from '@nestjs/common';
import { IAccessRepository } from '../interfaces/access.repository.interface';
import { ClientService } from '../client.service';

@Injectable()
export default class AccessRepository implements IAccessRepository {
  constructor(private readonly db: ClientService) {}

  giveAccess(idUser: number, idGroup: number) {
    return this.db.userGroup.create({ data: { idUser, idGroup } });
  }

  revokeAccess(idUser: number, idGroup: number) {
    return this.db.userGroup.delete({
      where: {
        idUser_idGroup: {
          idUser,
          idGroup,
        },
      },
    });
  }
}
