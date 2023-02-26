import { userSlice } from "store/reducers/userSlice/userSlice";
import { roomSlice } from "store/reducers/roomSlice/roomSlice";

export enum RootReducerNamespace {
  USER = "userSlice",
  ROOM = "roomSlice",
}

export const rootReducers = {
  [RootReducerNamespace.USER]: userSlice.reducer,
  [RootReducerNamespace.ROOM]: roomSlice.reducer,
};
