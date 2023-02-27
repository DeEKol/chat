import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { handleLogout } from "store/reducers/userSlice/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ChatHeaderStyles } from "components/Chat/ChatHeader/ChatHeader.styles";

const ChatHeader = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { name, lastname } = useAppSelector((state) => state.userSlice);

  const handleRoomLeave = () => {
    dispatch(handleLogout());
    setTimeout(() => {
      navigate("/");
    }, 4);
  };

  return (
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
  );
};

const { ChatHeaderSC, HeaderTopSC } = ChatHeaderStyles();

export default React.memo(ChatHeader);
