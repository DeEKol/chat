import { getLocalStorageRoomMessages } from "lib/services/sessionStorage";
import { IMessageModel, MessageType } from "lib/models/IMessageModel";
import {
  handleChangeResponse,
  handleChangeRoom,
} from "store/reducers/roomSlice/roomSlice";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { useParams } from "react-router-dom";

export const useCreateMessage = () => {
  const { id } = useParams();
  const user = useAppSelector((state) => state.userSlice);
  const response = useAppSelector((state) => state.roomSlice.response);
  const dispatch = useAppDispatch();

  const sendMessage = (message: string, type: MessageType) => {
    const roomId = id || "";
    const existsMessages = getLocalStorageRoomMessages(roomId);

    const newMessage: IMessageModel = {
      id: Date.now(),
      text: message,
      type,
      createdAt: new Date().getTime(),
      response,
      user,
    };

    const messages: IMessageModel[] = [...existsMessages, newMessage];

    dispatch(
      handleChangeRoom({
        id: roomId,
        messages: messages,
      }),
    );
    dispatch(handleChangeResponse(null));
  };

  return {
    sendMessage,
  };
};
