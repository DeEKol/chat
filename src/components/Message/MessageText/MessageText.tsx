import React from "react";
import { styled } from "@mui/material";
import { IMessageModel } from "lib/models/IMessageModel";

const MessageText = ({ text }: Pick<IMessageModel, "text">) => {
  return <MessageSC>{text}</MessageSC>;
};

const MessageSC = styled("p")``;

export default MessageText;
