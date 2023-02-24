import { useEffect } from "react";
import { Window } from "@mui/icons-material";
import { IRoomModel } from "lib/models/IRoomModel";
import { useCurrentMessages } from "hooks/useCurrentMessages";

export const useChatMessages = () => {
  const { existsMessage } = useCurrentMessages();

  const onPostMessage = (event: MessageEvent<IRoomModel[]>) => {
    console.log(event);
  };

  useEffect(() => {
    window.addEventListener("message", onPostMessage);
    return () => window.removeEventListener("message", onPostMessage);
  }, []);

  return { existsMessage };
};
