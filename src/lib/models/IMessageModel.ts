import { IUserModel } from "lib/models/IUserModel";

export interface IMessageModel {
  id: number;
  senderInfo: number;
  text: string;
  date: string;
  user: Omit<IUserModel, "roomsData">;
  response?: IMessageModel;
}
