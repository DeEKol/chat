import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserModel } from "lib/models/IUserModel";
import { IMessageModel } from "lib/models/IMessageModel";
import { IRoomModel } from "lib/models/IRoomModel";
import { setSessionRooms, setSessionUser } from "lib/services/sessionStorage";

const initialState: IUserModel = {
  id: 0,
  name: "",
  lastname: "",
  roomsData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleChangeUserAuth(state, action: PayloadAction<IUserModel>) {
      setSessionUser(action.payload);
      return action.payload;
    },
    handleSaveMessage(state, action: PayloadAction<IRoomModel[]>) {
      setSessionRooms(action.payload);
      state.roomsData = action.payload;
    },
    handleLogout: () => initialState,
  },
});

export const { handleChangeUserAuth, handleSaveMessage, handleLogout } =
  userSlice.actions;
