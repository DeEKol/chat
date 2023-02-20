import React from "react";
import { styled } from "@mui/material";
import Message from "components/Message/Message";

const ChatMessages = () => {
  return (
    <ContainerSC>
      {/*<div style={{ height: "2000px", backgroundColor: "orange" }}></div>*/}
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  //overflow-y: scroll;

  //height: 100%;
  //max-height: 100px;
`;

export default React.memo(ChatMessages);
