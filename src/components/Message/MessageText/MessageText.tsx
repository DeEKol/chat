import React from "react";
import { styled } from "@mui/material";

const MessageText = () => {
  const isMy = true;
  return (
    <>
      <SenderSC>Иван Иванов</SenderSC>
      <MessageSC>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam
        aspernatur cum cumque cupiditate dolorem dolorum ea, enim exercitationem
        fugiat ipsum maiores nihil, obcaecati quam, qui similique tempore vitae
        voluptate
      </MessageSC>
      <TimeSC>12.04.2022</TimeSC>
    </>
  );
};

const SenderSC = styled("div")`
  font-size: 16px;
  line-height: 20px;

  color: black;

  margin-bottom: 5px;
`;

const MessageSC = styled("p")``;

const TimeSC = styled("time")`
  font-size: 12px;
  line-height: 14px;
  color: grey;

  margin-top: 5px;
`;

export default MessageText;
