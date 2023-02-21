import { IUserModel } from "lib/models/IUserModel";
import { StorageNameSpace } from "lib/constants/constants";

export const saveSessionUser = (user: Omit<IUserModel, "id" | "roomsData">) => {
  sessionStorage.setItem(
    StorageNameSpace.USER,
    JSON.stringify({ ...user, id: Date.now(), roomsData: [] } as IUserModel),
  );
};

export const getSessionUser = () => {
  return sessionStorage.getItem(StorageNameSpace.USER);
};
