import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { FormEvent, useState } from "react";
import { IMessageModel, MessageType } from "lib/models/IMessageModel";
import { IRoomModel } from "lib/models/IRoomModel";
import { handleSaveMessage } from "store/reducers/userSlice/userSlice";
import { useCurrentMessages } from "hooks/useCurrentMessages";

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
