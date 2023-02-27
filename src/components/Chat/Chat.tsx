import React from "react";
import ChatMessages from "components/Chat/ChatMessages/ChatMessages";
import ChatField from "components/Chat/ChatField/ChatField";
import ChatHeader from "components/Chat/ChatHeader/ChatHeader";
import { ChatStyles } from "components/Chat/ Chat.styles";
import { useChat } from "components/Chat/useChat";

const Chat = () => {
  useChat();

  return (
    <ContainerSC>
      <ChatHeader />
      <ChatMessages />
      <ChatField />
    </ContainerSC>
  );
};

const { ContainerSC } = ChatStyles();

export default React.memo(Chat);
