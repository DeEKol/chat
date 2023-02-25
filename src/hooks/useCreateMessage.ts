import { IMessageModel, MessageType } from "lib/models/IMessageModel";
import { IRoomModel } from "lib/models/IRoomModel";
import { handleSaveMessage } from "store/reducers/userSlice/userSlice";
import { StorageNameSpace } from "lib/constants/constants";
import { IRoomMessageModel } from "lib/models/IRoomMessageModel";
import { useCurrentMessages } from "hooks/useCurrentMessages";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";

export const useCreateMessage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice);
  const { currentRoomId, existsMessage } = useCurrentMessages();

  const createMessage = (
    type: MessageType,
    message: string,
    otherMessage?: IMessageModel,
  ) => {
    const { roomsData, ...otherUserInfo } = user;

    const newMessage: IMessageModel = otherMessage || {
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
    if (!otherMessage) {
      localStorage.setItem(
        StorageNameSpace.LAST_MESSAGES,
        JSON.stringify({
          room: currentRoomId,
          message: newMessage,
        } as IRoomMessageModel),
      );
      localStorage.removeItem(StorageNameSpace.LAST_MESSAGES);
    }
  };

  return { createMessage };
};
