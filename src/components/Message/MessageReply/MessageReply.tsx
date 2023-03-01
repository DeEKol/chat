import React from "react";
import Message from "components/Message/Message";
import { IResponseModel } from "lib/models/IMessageModel";
import { MessageReplyStyles } from "components/Message/MessageReply/MessageReply.styles";

interface MessageReply {
  response: IResponseModel;
  headerHeight: number;
}

const MessageReply = ({ response, headerHeight }: MessageReply) => {
  return (
    <ResponseContainerSC
      onClick={() =>
        window.scrollTo({
          behavior: "smooth",
          top: response?.scrollTop - headerHeight,
        })
      }>
      <ResponseTitleSC>Ответил на:</ResponseTitleSC>
      <Message
        isResponse={true}
        {...response}
      />
    </ResponseContainerSC>
  );
};

const { ResponseContainerSC, ResponseTitleSC } = MessageReplyStyles();

export default React.memo(MessageReply);
