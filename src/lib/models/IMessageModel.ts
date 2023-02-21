import { IUserModel } from "lib/models/IUserModel";

export interface IMessageModel {
  readonly id: number;
  readonly text: string;
  readonly date: string;
  readonly user: Omit<IUserModel, "roomsData">;
  readonly response?: IMessageModel;
}
