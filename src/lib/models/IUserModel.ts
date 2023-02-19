import { IRoomModel } from "lib/models/IRoomModel";

export type AuthType = null | boolean;

export interface IUserModel {
  id: number;
  name: string;
  lastname: string;
  currentRoom: string | null;
  roomsData: IRoomModel[];
}
