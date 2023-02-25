import { IUserModel } from "lib/models/IUserModel";
import { StorageNameSpace } from "lib/constants/constants";
import { IRoomModel } from "lib/models/IRoomModel";

export const getLocalStorageUser = (): IUserModel[] => {
  return JSON.parse(localStorage.getItem(StorageNameSpace.USERS) || "[]");
};

export const setLocalStorageUser = (user: IUserModel) => {
  const users = getLocalStorageUser();
  localStorage.setItem(
    StorageNameSpace.USERS,
    JSON.stringify([
      ...users.filter((userItem) => userItem.id !== user.id),
      user,
    ]),
  );
};

export const deleteLocalStorageUser = (user: IUserModel) => {
  const users = getLocalStorageUser();
  localStorage.setItem(
    StorageNameSpace.USERS,
    JSON.stringify([...users.filter((userItem) => userItem.id !== user.id)]),
  );
};

export const setSessionUser = (user: IUserModel) => {
  sessionStorage.setItem(StorageNameSpace.USER, JSON.stringify(user));
  setLocalStorageUser(user);
};

export const getSessionUser = () => {
  const user = sessionStorage.getItem(StorageNameSpace.USER);
  if (user) {
    return JSON.parse(user) as IUserModel;
  }
  return null;
};

export const setSessionRooms = (rooms: IRoomModel[]) => {
  const user = getSessionUser() as IUserModel;
  setSessionUser({ ...user, roomsData: rooms });
};
