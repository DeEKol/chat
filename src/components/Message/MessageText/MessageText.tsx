import React from "react";
import { styled } from "@mui/material";
import { IMessageModel } from "lib/models/IMessageModel";

const MessageText = ({
  text,
  user,
  createdAt,
}: Omit<IMessageModel, "id" | "type">) => {
  return (
    <>
      <SenderSC>{`${user.name} ${user.lastname}`}</SenderSC>
      <MessageSC>{text}</MessageSC>
      <TimeSC>{new Date(createdAt).toLocaleString("ru-RU")}</TimeSC>
    </>
  );
};

const SenderSC = styled("div")`
  font-size: 16px;
  line-height: 20px;

  color: black;

  margin-bottom: 5px;
`;

const MessageSC = styled("p")``;

const TimeSC = styled("time")`
  font-size: 12px;
  line-height: 14px;
  color: grey;

  margin-top: 5px;
`;

export default MessageText;
