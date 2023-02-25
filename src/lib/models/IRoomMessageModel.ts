import { IMessageModel } from "lib/models/IMessageModel";

export interface IRoomMessageModel {
  room: string;
  message: IMessageModel;
}
