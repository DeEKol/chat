import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { Button } from "@mui/material";
import Message from "components/Message/Message";
import { handleChangeResponse } from "store/reducers/roomSlice/roomSlice";
import { ChatFieldResponseStyles } from "components/Chat/ChatField/ChatFieldResponse/ChatFieldResponse.styles";

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

const { ContainerSC, WrapperSC, TittleSC } = ChatFieldResponseStyles();

export default ChatFieldResponse;
