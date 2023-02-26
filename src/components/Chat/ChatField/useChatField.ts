import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { FormEvent, useState } from "react";
import { IMessageModel, MessageType } from "lib/models/IMessageModel";
import { IRoomModel } from "lib/models/IRoomModel";
import { handleSaveMessage } from "store/reducers/userSlice/userSlice";
import { useCurrentMessages } from "hooks/useCurrentMessages";
import { StorageNameSpace } from "lib/constants/constants";
import { IRoomMessageModel } from "lib/models/IRoomMessageModel";
import { useCreateMessage } from "hooks/useCreateMessage";

export const useChatField = () => {
  const [message, setMessage] = useState<string>("");

  const { createMessage } = useCreateMessage();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message) {
      return;
    }

    createMessage("text", message);

    setMessage("");
  };

  return {
    message,
    setMessage,
    onSubmit,
  };
};
