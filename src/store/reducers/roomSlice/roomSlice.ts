import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoomModel } from "lib/models/IRoomModel";
import { setLocalStorageRoom } from "lib/services/sessionStorage";
import { IMessageModel } from "lib/models/IMessageModel";

interface IInitialRoomSlice extends IRoomModel {
  response: IMessageModel | null;
}

const initialState: IInitialRoomSlice = {
  id: "",
  messages: [],
  response: null,
};

export const roomSlice = createSlice({
  name: "roomSlice",
  initialState,
  reducers: {
    handleResetRoom: () => initialState,
    handleChangeRoom(state, action: PayloadAction<IRoomModel>) {
      if (action.payload.messages.length) {
        setLocalStorageRoom(action.payload.id, action.payload.messages);
      }
      state.id = action.payload.id;
      state.messages = action.payload.messages;
    },
    handleChangeResponse: (
      state,
      action: PayloadAction<IMessageModel | null>,
    ) => {
      state.response = action.payload;
    },
  },
});

export const { handleChangeRoom, handleResetRoom, handleChangeResponse } =
  roomSlice.actions;
