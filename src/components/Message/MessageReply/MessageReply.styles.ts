import { styled } from "@mui/material";

const ResponseContainerSC = styled("button")`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
`;

const ResponseTitleSC = styled("h4")`
  margin-right: 10px;
`;

export const MessageReplyStyles = () => ({
  ResponseContainerSC,
  ResponseTitleSC,
});
