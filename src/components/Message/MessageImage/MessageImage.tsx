import React from "react";
import { IMessageModel } from "lib/models/IMessageModel";
import { MessageImageStyles } from "components/Message/MessageImage/MessageImage.styles";

const MessageImage = ({ text }: Pick<IMessageModel, "text">) => {
  return (
    <ImageSC
      alt="message_image"
      src={text}
    />
  );
};

const { ImageSC } = MessageImageStyles();

export default React.memo(MessageImage);
