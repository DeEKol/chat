import { IUserModel } from "lib/models/IUserModel";

export type MessageType = "text" | "image";

export interface IResponseModel extends IMessageModel {
  scrollTop: number;
}

export type ResponseType = IResponseModel | null;

export interface IMessageModel {
  readonly id: number;
  readonly text: string;
  readonly createdAt: number;
  readonly user: Omit<IUserModel, "roomsData">;
  readonly type: MessageType;
  readonly response: ResponseType;
}
