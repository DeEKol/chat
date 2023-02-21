import { IRoomModel } from "lib/models/IRoomModel";

export type AuthType = null | boolean;

export interface IUserModel {
  readonly id: number;
  readonly name: string;
  readonly lastname: string;
  readonly currentRoom: string | null;
  readonly roomsData: IRoomModel[];
}
