import { styled } from "@mui/material";

const ContainerSC = styled("div")`
  padding-top: 5px;
  width: 100%;
  & > div {
    max-width: 100%;
  }
`;

const WrapperSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const TittleSC = styled("h3")``;

export const ChatFieldResponseStyles = () => ({
  ContainerSC,
  WrapperSC,
  TittleSC,
});
