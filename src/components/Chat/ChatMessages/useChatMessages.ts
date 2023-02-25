import { useEffect } from "react";
import { Window } from "@mui/icons-material";
import { IRoomModel } from "lib/models/IRoomModel";
import { useCurrentMessages } from "hooks/useCurrentMessages";
import { StorageNameSpace } from "lib/constants/constants";
import { IMessageModel } from "lib/models/IMessageModel";
import { IRoomMessageModel } from "lib/models/IRoomMessageModel";
import { useAppDispatch } from "hooks/useStoreHooks";

export const useChatMessages = () => {
  const { existsMessage, currentRoomId } = useCurrentMessages();

  const dispatch = useAppDispatch();

  const onPostMessage = (event: StorageEvent) => {
    console.log(event);
    if (event.key === StorageNameSpace.LAST_MESSAGES) {
      console.log(event.newValue);
      const roomMessage: IRoomMessageModel = JSON.parse(event.newValue || "");
      if (roomMessage) {
        if (roomMessage.room === currentRoomId) {
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("storage", onPostMessage);
    return () => window.removeEventListener("storage", onPostMessage);
  }, []);

  return { existsMessage };
};
