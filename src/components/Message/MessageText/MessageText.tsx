import React from "react";
import { IMessageModel } from "lib/models/IMessageModel";
import { styled } from "@mui/material";

const MessageText = ({ text }: Pick<IMessageModel, "text">) => {
  return <ParagraphSC>{text}</ParagraphSC>;
};

const ParagraphSC = styled("p")`
  word-break: break-word;
`;

export default React.memo(MessageText);
