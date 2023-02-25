import { useEffect } from "react";
import { Window } from "@mui/icons-material";
import { IRoomModel } from "lib/models/IRoomModel";
import { useCurrentMessages } from "hooks/useCurrentMessages";
import { StorageNameSpace } from "lib/constants/constants";

export const useChatMessages = () => {
  const { existsMessage } = useCurrentMessages();

  const onPostMessage = (event: StorageEvent) => {
    console.log(event);
    // if (event.key === StorageNameSpace.USERS) {
    // }
  };

  useEffect(() => {
    window.addEventListener("storage", onPostMessage);
    return () => window.removeEventListener("storage", onPostMessage);
  }, []);

  return { existsMessage };
};
