import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { StorageNameSpace } from "lib/constants/constants";
import {
  getLocalStorageRoomMessages,
  getLocalStorageRooms,
} from "lib/services/sessionStorage";
import { useParams } from "react-router-dom";
import { handleChangeRoom } from "store/reducers/roomSlice/roomSlice";

export const useChatMessages = () => {
  const { messages } = useAppSelector((state) => state.roomSlice);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const onPostMessage = (event: StorageEvent) => {
    if (event.key == StorageNameSpace.ROOMS) {
      const typeRoomId = id || "";
      dispatch(
        handleChangeRoom({
          id: typeRoomId,
          messages: getLocalStorageRoomMessages(typeRoomId),
        }),
      );
    }
  };

  useEffect(() => {
    window.addEventListener("storage", onPostMessage);
    return () => window.removeEventListener("storage", onPostMessage);
  }, []);

  useEffect(() => {
    if (messages.length) {
      setTimeout(() => {
        window.scrollTo({ top: 10000000000000 });
      }, 20);
    }
  }, [messages]);
  //
  return {
    messages,
  };
};
