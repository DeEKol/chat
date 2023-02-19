import { styled } from "@mui/material";

const FormSC = styled("form")`
  display: flex;
  flex-direction: column;
`;

const FormItemContainer = styled("div")`
  margin-bottom: 10px;
`;

export const UserAuthStyles = () => ({
  FormSC,
  FormItemContainer,
});
