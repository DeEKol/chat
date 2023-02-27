import { styled } from "@mui/material";

const ContainerSC = styled("section")`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  min-height: 100vh;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

export const ChatStyles = () => ({
  ContainerSC,
});
