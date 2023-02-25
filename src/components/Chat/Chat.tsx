import React from "react";
import { Button, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ChatMessages from "components/Chat/ChatMessages/ChatMessages";
import ChatField from "components/Chat/ChatField/ChatField";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { handleLogout } from "store/reducers/userSlice/userSlice";

const Chat = () => {
  const { id } = useParams();

  const { name, lastname } = useAppSelector((state) => state.userSlice);

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
        <HeaderTopSC>
          <h1>Комната: {id}</h1>
          <Button onClick={handleRoomLeave}>Выйти</Button>
        </HeaderTopSC>
        <div>
          <h2>
            {name} {lastname}
          </h2>
        </div>
      </ChatHeaderSC>
      <WrapperSC>
        <ChatMessages />
        <ChatField />
      </WrapperSC>
    </ContainerSC>
  );
};

const HeaderTopSC = styled("div")`
  display: flex;
  justify-content: space-between;
`;

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
