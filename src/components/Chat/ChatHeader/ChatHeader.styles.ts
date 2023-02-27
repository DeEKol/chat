import { styled } from "@mui/material";

const ChatHeaderSC = styled("header")`
  border-bottom: 1px solid gray;
  padding: 0 10px;

  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1;
`;

const HeaderTopSC = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const ChatHeaderStyles = () => ({
  ChatHeaderSC,
  HeaderTopSC,
});
