import React from "react";
import { styled } from "@mui/material";
import MessageText from "components/Message/MessageText/MessageText";
import MessageImage from "components/Message/MessageImage/MessageImage";

const Message = () => {
  const isMy = true;
  return (
    <ContainerSC isMy={isMy}>
      {/*<MessageText />*/}
      {/*<MessageImage />*/}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")<{ isMy: boolean }>`
  background-color: lightblue;
  color: white;
  border-radius: 10px;
  max-width: 80%;

  padding: 10px;
  margin-bottom: 10px;

  align-self: ${({ isMy }) => (isMy ? "flex-end" : "flex-start")};
  text-align: ${({ isMy }) => (isMy ? "right" : "left")};
`;

export default React.memo(Message);
