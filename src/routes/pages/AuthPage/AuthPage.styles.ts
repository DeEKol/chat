import { styled } from "@mui/material";

const ContainerSC = styled("section")`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperSC = styled("div")`
  width: 100%;
  max-width: 500px;

  padding: 10px;
  margin: 10px;
  border-radius: 10px;

  background-color: #ffffff;
`;

const TitleCS = styled("h1")``;

export const AuthPageStyles = () => ({
  ContainerSC,
  WrapperSC,
  TitleCS,
});
