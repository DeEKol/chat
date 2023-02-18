import { userSlice } from "store/reducers/userSlice/userSlice";

export enum RootReducerNamespace {
  USER = "userSlice",
}

export const rootReducers = { [RootReducerNamespace.USER]: userSlice.reducer };
