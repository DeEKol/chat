import { Button, styled } from "@mui/material";

const ContainerSC = styled("div")<{ isMy: boolean }>`
  max-width: 80%;
  margin-bottom: 10px;
  align-self: ${({ isMy }) => (isMy ? "flex-end" : "flex-start")};
  text-align: ${({ isMy }) => (isMy ? "right" : "left")};
  background-color: lavender;
  border-radius: 10px;
  overflow: hidden;
`;

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

const WrapperSC = styled("div")`
  background-color: lightblue;
  color: white;
  padding: 10px;
`;

const SenderSC = styled("div")`
  font-size: 16px;
  line-height: 20px;

  color: black;

  margin-bottom: 5px;
`;

const TimeSC = styled("time")`
  font-size: 12px;
  line-height: 14px;
  color: grey;

  margin-top: 5px;
`;

const ButtonSC = styled(Button)`
  display: block;
  padding: 0;
  margin: 5px 0;
`;

export const MessageStyles = () => ({
  ContainerSC,
  ResponseContainerSC,
  ResponseTitleSC,
  WrapperSC,
  SenderSC,
  TimeSC,
  ButtonSC,
});
