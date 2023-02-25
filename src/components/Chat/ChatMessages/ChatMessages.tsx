import React, { useEffect } from "react";
import { styled } from "@mui/material";
import Message from "components/Message/Message";
import { useChatMessages } from "components/Chat/ChatMessages/useChatMessages";

const ChatMessages = () => {
  const { existsMessage } = useChatMessages();

  useEffect(() => {
    if (existsMessage.length) {
      window.scrollTo({ top: 10000000000000 });
    }
  }, [existsMessage]);

  return (
    <ContainerSC>
      {existsMessage.map((messageItem) => (
        <Message
          key={messageItem.id}
          {...messageItem}
        />
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export default React.memo(ChatMessages);
