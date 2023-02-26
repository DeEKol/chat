import { IMessageModel } from "lib/models/IMessageModel";

export interface IRoomModel {
  readonly id: string;
  readonly messages: IMessageModel[];
}
