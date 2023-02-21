import React from "react";
import { styled } from "@mui/material";
import Message from "components/Message/Message";

const ChatMessages = () => {
  return <ContainerSC></ContainerSC>;
};

const ContainerSC = styled("div")`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;

export default React.memo(ChatMessages);
