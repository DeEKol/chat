import React from "react";
import Message from "components/Message/Message";
import { useChatMessages } from "components/Chat/ChatMessages/useChatMessages";
import { ChatMessagesStyles } from "components/Chat/ChatMessages/ChatMessages.styles";

const ChatMessages = () => {
  const { messages } = useChatMessages();

  return (
    <ContainerSC>
      {messages.map((messageItem) => (
        <Message
          key={messageItem.id}
          {...messageItem}
        />
      ))}
    </ContainerSC>
  );
};

const { ContainerSC } = ChatMessagesStyles();

export default React.memo(ChatMessages);
