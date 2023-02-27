import React from "react";
import { styled } from "@mui/material";
import { IMessageModel } from "lib/models/IMessageModel";

const MessageImage = ({ text }: Pick<IMessageModel, "text">) => {
  console.log(text);
  return (
    <ImageSC
      alt="message_image"
      src={text}
    />
  );
};

const ImageSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;

  max-height: 500px;
`;

export default React.memo(MessageImage);
