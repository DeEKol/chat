import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthType, IUserModel } from "lib/models/IUserModel";

export interface UserState {
  isAuth: AuthType;
  userData: IUserModel;
}

const initialState: UserState = {
  isAuth: null,
  userData: {
    id: 0,
    name: "",
    lastname: "",
    currentRoom: null,
    roomsData: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAuth(state, action: PayloadAction<IUserModel>) {
      state.isAuth = true;
      state.userData = action.payload;
    },
  },
});

export const { userAuth } = userSlice.actions;
