import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { handleLogout } from "store/reducers/userSlice/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Button, styled } from "@mui/material";

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

const ChatHeaderSC = styled("header")`
  border-bottom: 1px solid gray;
  padding: 0 10px;

  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1;
`;

const HeaderTopSC = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export default ChatHeader;
