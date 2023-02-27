import React, { useMemo } from "react";
import { Button, styled } from "@mui/material";
import MessageText from "components/Message/MessageText/MessageText";
import MessageImage from "components/Message/MessageImage/MessageImage";
import { IMessageModel } from "lib/models/IMessageModel";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { handleChangeResponse } from "store/reducers/roomSlice/roomSlice";

interface IMessageProps extends IMessageModel {
  isResponse?: boolean;
}

const Message = ({ isResponse = false, ...props }: IMessageProps) => {
  const { response } = props;
  const { type, user, createdAt, text } = props;
  const userId = useAppSelector((state) => state.userSlice.id);
  const dispatch = useAppDispatch();

  const isMy = useMemo(() => userId === user.id, [user, userId]);

  const handleClick = () => {
    dispatch(handleChangeResponse(props));
  };

  return (
    <ContainerSC isMy={isMy}>
      {response && (
        <ResponseContainerSC>
          <ResponseTitleSC>Ответил на:</ResponseTitleSC>
          <Message
            isResponse={true}
            {...response}
          />
        </ResponseContainerSC>
      )}
      <WrapperSC>
        <SenderSC>{`${user.name} ${user.lastname}`}</SenderSC>
        {type === "text" && <MessageText text={text} />}
        {type === "image" && <MessageImage text={text} />}
        <TimeSC>{new Date(createdAt).toLocaleString("ru-RU")}</TimeSC>
      </WrapperSC>
      {!isMy && !isResponse && (
        <ButtonSC onClick={handleClick}>Ответить</ButtonSC>
      )}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")<{ isMy: boolean }>`
  max-width: 80%;
  margin-bottom: 10px;
  align-self: ${({ isMy }) => (isMy ? "flex-end" : "flex-start")};
  text-align: ${({ isMy }) => (isMy ? "right" : "left")};
  background-color: lavender;
  border-radius: 10px;
  overflow: hidden;
`;

const ResponseContainerSC = styled("div")`
  display: flex;
  align-items: center;
`;

const ResponseTitleSC = styled("h4")`
  margin-right: 10px;
`;

const WrapperSC = styled("div")`
  background-color: lightblue;
  color: white;
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
