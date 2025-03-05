export interface IAccessRepository {
  giveAccess(idUser: number, idGroup: number);
  revokeAccess(idUser: number, idGroup: number);
}
