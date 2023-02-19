import React from "react";
import { styled } from "@mui/material";

const ChatMessages = () => {
  return (
    <ContainerSC>
      {/*<div style={{ height: "2000px", backgroundColor: "orange" }}></div>*/}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  flex-grow: 1;

  //overflow-y: scroll;

  //height: 100%;
  //max-height: 100px;
`;

export default React.memo(ChatMessages);
