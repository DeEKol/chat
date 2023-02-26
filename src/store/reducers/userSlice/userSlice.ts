import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserModel } from "lib/models/IUserModel";
import { setSessionUser } from "lib/services/sessionStorage";

const initialState: IUserModel = {
  id: 0,
  name: "",
  lastname: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    handleChangeUserAuth(state, action: PayloadAction<IUserModel>) {
      setSessionUser(action.payload);
      return action.payload;
    },
    handleLogout: () => initialState,
  },
});

export const { handleChangeUserAuth, handleLogout } = userSlice.actions;
