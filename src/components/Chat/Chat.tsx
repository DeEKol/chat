import React from "react";
import { Button, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ChatMessages from "components/Chat/ChatMessages/ChatMessages";
import ChatField from "components/Chat/ChatField/ChatField";
import { useAppDispatch } from "hooks/useStoreHooks";
import { handleLogout } from "store/reducers/userSlice/userSlice";

const Chat = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleRoomLeave = () => {
    dispatch(handleLogout());
    setTimeout(() => {
      navigate("/");
    }, 4);
  };

  return (
    <ContainerSC>
      <ChatHeaderSC>
        <h1>Комната: {id}</h1>
        <Button onClick={handleRoomLeave}>Выйти</Button>
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

  display: flex;
  justify-content: space-between;
`;

const WrapperSC = styled("div")`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  padding: 10px;
`;

export default React.memo(Chat);
