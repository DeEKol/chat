import React, { useEffect } from "react";
import { styled } from "@mui/material";
import ChatMessages from "components/Chat/ChatMessages/ChatMessages";
import ChatField from "components/Chat/ChatField/ChatField";
import { getLocalStorageRoomMessages } from "lib/services/sessionStorage";
import ChatHeader from "components/Chat/ChatHeader/ChatHeader";
import { useAppDispatch } from "hooks/useStoreHooks";
import { useParams } from "react-router-dom";
import { handleChangeRoom } from "store/reducers/roomSlice/roomSlice";

const Chat = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const roomId = id || "";

    dispatch(
      handleChangeRoom({
        id: roomId,
        messages: getLocalStorageRoomMessages(roomId),
      }),
    );
  }, []);

  return (
    <ContainerSC>
      <ChatHeader />
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

const WrapperSC = styled("div")`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  padding: 10px;
`;

export default React.memo(Chat);
