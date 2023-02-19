import React from "react";
import { styled } from "@mui/material";
import { useParams } from "react-router-dom";
import ChatMessages from "components/Chat/ChatMessages/ChatMessages";
import ChatField from "components/Chat/ChatField/ChatField";

const Chat = () => {
  const { id } = useParams();

  return (
    <ContainerSC>
      <ChatHeaderSC>
        <h1>Комната: {id}</h1>
      </ChatHeaderSC>
      <WrapperSC>
        <ChatMessages />
        <ChatField />
      </WrapperSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  min-height: 100vh;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

const ChatHeaderSC = styled("header")`
  border-bottom: 1px solid gray;
  padding: 0 10px;

  position: sticky;
  top: 0;
  background-color: #ffffff;
`;

const WrapperSC = styled("div")`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  padding: 10px;
`;

export default React.memo(Chat);
