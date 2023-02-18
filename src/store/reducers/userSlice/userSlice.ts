import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthType, IUserModel } from "lib/models/IUserModel";

export interface UserState {
  isAuth: AuthType;
  userData: IUserModel;
}

const initialState: UserState = {
  isAuth: null,
  userData: { id: 0, firstname: "", lastname: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeAuth(state, action: PayloadAction<AuthType>) {
      state.isAuth = action.payload;
    },
  },
});

export const { changeAuth } = userSlice.actions;
