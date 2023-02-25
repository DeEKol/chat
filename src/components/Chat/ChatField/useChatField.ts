import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { FormEvent, useState } from "react";
import { IMessageModel, MessageType } from "lib/models/IMessageModel";
import { IRoomModel } from "lib/models/IRoomModel";
import { handleSaveMessage } from "store/reducers/userSlice/userSlice";
import { useCurrentMessages } from "hooks/useCurrentMessages";
import { StorageNameSpace } from "lib/constants/constants";
import { IRoomMessageModel } from "lib/models/IRoomMessageModel";

export const useChatField = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice);
  const { currentRoomId, existsMessage } = useCurrentMessages();

  const [message, setMessage] = useState<string>("");

  const createMessage = (type: MessageType) => {
    const { roomsData, ...otherUserInfo } = user;

    const newMessage: IMessageModel = {
      id: Date.now() + user.id,
      text: message,
      createdAt: new Date().getTime(),
      user: otherUserInfo,
      type,
    };

    const updatedRoom: IRoomModel[] = [
      ...roomsData.filter((roomItem) => roomItem.id !== currentRoomId),
      { id: currentRoomId as string, message: [...existsMessage, newMessage] },
    ];

    dispatch(handleSaveMessage(updatedRoom));
    localStorage.setItem(
      StorageNameSpace.LAST_MESSAGES,
      JSON.stringify({
        room: currentRoomId,
        message: newMessage,
      } as IRoomMessageModel),
    );
    localStorage.removeItem(StorageNameSpace.LAST_MESSAGES);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createMessage("text");

    setMessage("");
  };

  return {
    message,
    setMessage,
    onSubmit,
  };
};
