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
  const { ref, response, isMy, handleClick, createdAt, user, type, text } =
    useMessage(props);

  const headerHeight = document.querySelector("header")?.offsetHeight || 0;

  return (
    <ContainerSC
      isMy={isMy}
      ref={ref}>
      {/*TODO: ВЫНЕСТИ В ОТДЕЛЬНЫЙ КОМПОНЕНТ*/}
      {response && (
        <ResponseContainerSC
          onClick={() =>
            window.scrollTo({
              behavior: "smooth",
              top: response?.scrollTop - headerHeight,
            })
          }>
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
      {!isMy && !isResponse && !response && (
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
