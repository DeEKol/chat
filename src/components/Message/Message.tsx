import React from "react";
import MessageText from "components/Message/MessageText/MessageText";
import MessageImage from "components/Message/MessageImage/MessageImage";
import { IMessageModel } from "lib/models/IMessageModel";
import { MessageStyles } from "components/Message/Message.styles";
import { useMessage } from "components/Message/useMessage";

export interface IMessageProps extends IMessageModel {
  isResponse?: boolean;
}

const Message = ({ isResponse = false, ...props }: IMessageProps) => {
  const { response, isMy, handleClick, createdAt, user, type, text } =
    useMessage(props);
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

const {
  ContainerSC,
  ResponseContainerSC,
  ResponseTitleSC,
  WrapperSC,
  SenderSC,
  TimeSC,
  ButtonSC,
} = MessageStyles();

export default React.memo(Message);
