import React from "react";
import { styled } from "@mui/material";

const MessageImage = () => {
  return (
    <ImageSC
      alt="message_image"
      src="https://picsum.photos/1920/1080"
    />
  );
};

const ImageSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: contain;

  max-height: 500px;
`;

export default React.memo(MessageImage);
