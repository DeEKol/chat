import React, { useMemo } from "react";
import { Button, styled } from "@mui/material";
import MessageText from "components/Message/MessageText/MessageText";
import MessageImage from "components/Message/MessageImage/MessageImage";
import { IMessageModel } from "lib/models/IMessageModel";
import { useAppSelector } from "hooks/useStoreHooks";

const Message = (props: IMessageModel) => {
  const { type, user, createdAt, text, response } = props;
  const userId = useAppSelector((state) => state.userSlice.id);

  const isMy = useMemo(() => userId === user.id, [user, userId]);

  return (
    <ContainerSC isMy={isMy}>
      <WrapperSC>
        <SenderSC>{`${user.name} ${user.lastname}`}</SenderSC>
        {type === "text" && <MessageText text={text} />}
        {type === "image" && <MessageImage text={text} />}
        <TimeSC>{new Date(createdAt).toLocaleString("ru-RU")}</TimeSC>
      </WrapperSC>
      <ButtonSC>Ответить</ButtonSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")<{ isMy: boolean }>`
  max-width: 80%;
  margin-bottom: 10px;
  align-self: ${({ isMy }) => (isMy ? "flex-end" : "flex-start")};
  text-align: ${({ isMy }) => (isMy ? "right" : "left")};
`;

const WrapperSC = styled("div")`
  background-color: lightblue;
  color: white;
  border-radius: 10px;
  padding: 10px;
`;

const SenderSC = styled("div")`
  font-size: 16px;
  line-height: 20px;

  color: black;

  margin-bottom: 5px;
`;

const TimeSC = styled("time")`
  font-size: 12px;
  line-height: 14px;
  color: grey;

  margin-top: 5px;
`;

const ButtonSC = styled(Button)`
  display: block;
  padding: 0;
  margin: 5px 0;
`;
export default React.memo(Message);
