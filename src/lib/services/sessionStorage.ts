import { IUserModel } from "lib/models/IUserModel";
import { StorageNameSpace } from "lib/constants/constants";
import { IRoomModel } from "lib/models/IRoomModel";
import { IMessageModel } from "lib/models/IMessageModel";

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

export const getLocalStorageRooms = () => {
  const rooms = localStorage.getItem(StorageNameSpace.ROOMS) || "[]";
  return JSON.parse(rooms) as IRoomModel[];
};

export const getLocalStorageRoomMessages = (roomId: string) => {
  const rooms = getLocalStorageRooms();
  return rooms.find((roomItem) => roomItem.id === roomId)?.messages || [];
};

export const setLocalStorageRoom = (
  roomId: string,
  messages: IMessageModel[],
) => {
  const rooms = getLocalStorageRooms();
  const newRoom: IRoomModel[] = [
    ...rooms.filter((item) => item.id !== roomId),
    { id: roomId, messages },
  ];

  localStorage.setItem(StorageNameSpace.ROOMS, JSON.stringify(newRoom));
};
