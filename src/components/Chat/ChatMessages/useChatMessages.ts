import { useEffect } from "react";
import { Window } from "@mui/icons-material";
import { IRoomModel } from "lib/models/IRoomModel";
import { useCurrentMessages } from "hooks/useCurrentMessages";
import { StorageNameSpace } from "lib/constants/constants";
import { IMessageModel } from "lib/models/IMessageModel";
import { IRoomMessageModel } from "lib/models/IRoomMessageModel";
import { useAppDispatch } from "hooks/useStoreHooks";
import { useCreateMessage } from "hooks/useCreateMessage";

export const useChatMessages = () => {
  const { existsMessage, currentRoomId } = useCurrentMessages();

  const { createMessage } = useCreateMessage();

  const onPostMessage = (event: StorageEvent) => {
    if (event.key === StorageNameSpace.LAST_MESSAGES) {
      const roomMessage: IRoomMessageModel = JSON.parse(event.newValue || "");
      if (roomMessage) {
        if (roomMessage.room === currentRoomId) {
          createMessage("text", roomMessage.message.text, roomMessage.message);
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
