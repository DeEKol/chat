import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoomModel } from "lib/models/IRoomModel";
import { setLocalStorageRoom } from "lib/services/sessionStorage";

const initialState: IRoomModel = {
  id: "",
  messages: [],
};

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState,
  reducers: {
    handleChangeRoom(state, action: PayloadAction<IRoomModel>) {
      if (action.payload.messages.length) {
        setLocalStorageRoom(action.payload.id, action.payload.messages);
      }
      return action.payload;
    },
    handleResetRoom: () => initialState,
  },
});

export const { handleChangeRoom, handleResetRoom } = roomSlice.actions;
