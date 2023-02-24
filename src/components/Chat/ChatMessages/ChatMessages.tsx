import React, { useEffect } from "react";
import { styled } from "@mui/material";
import Message from "components/Message/Message";
import { useCurrentMessages } from "hooks/useCurrentMessages";
import { useChatMessages } from "components/Chat/ChatMessages/useChatMessages";

const ChatMessages = () => {
  const { existsMessage } = useChatMessages();
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
