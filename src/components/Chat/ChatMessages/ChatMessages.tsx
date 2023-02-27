import React, { useEffect } from "react";
import { styled } from "@mui/material";
import Message from "components/Message/Message";
import { useChatMessages } from "components/Chat/ChatMessages/useChatMessages";

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

const ContainerSC = styled("main")`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default React.memo(ChatMessages);
