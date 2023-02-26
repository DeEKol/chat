import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { IMessageModel } from "lib/models/IMessageModel";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import {
  getLocalStorageRoomMessages,
  setLocalStorageRoom,
} from "lib/services/sessionStorage";
import { useParams } from "react-router-dom";
import { handleChangeRoom } from "store/reducers/roomSlice/roomSlice";
import { useCreateMessage } from "hooks/useCreateMessage";

export const useChatField = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage } = useCreateMessage();

  const [message, setMessage] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message) {
      return;
    }

    sendMessage(message, "text");

    setMessage("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const currentFile = files[0] as File;

    if (!currentFile.type.match("image")) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      sendMessage(ev.target?.result + "", "image");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (inputRef.current?.value) {
        inputRef.current.value = "";
      }
    };

    reader.readAsDataURL(currentFile);
  };

  return {
    message,
    onChange,
    inputRef,
    setMessage,
    onSubmit,
  };
};
