import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { Button, styled } from "@mui/material";
import ChatMessages from "components/Chat/ChatMessages/ChatMessages";
import Message from "components/Message/Message";
import { handleChangeResponse } from "store/reducers/roomSlice/roomSlice";

const ChatFieldResponse = () => {
  const response = useAppSelector((state) => state.roomSlice.response);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(handleChangeResponse(null));
  };

  return response ? (
    <ContainerSC>
      <WrapperSC>
        <TittleSC>
          Ответить на сообщение:{" "}
          {`${response.user.name}  ${response.user.lastname}`}
        </TittleSC>
        <Button
          variant="contained"
          onClick={handleDelete}>
          Удалить
        </Button>
      </WrapperSC>
      <Message
        {...response}
        isResponse={true}
      />
    </ContainerSC>
  ) : null;
};

const ContainerSC = styled("div")`
  padding-top: 5px;
  width: 100%;
  & > div {
    max-width: 100%;
  }
`;

const WrapperSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const TittleSC = styled("h3")``;

export default ChatFieldResponse;
