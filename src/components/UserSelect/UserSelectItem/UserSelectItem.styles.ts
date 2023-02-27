import { styled } from "@mui/material";

const TextFieldContainer = styled("div")`
  margin: 10px 0;
`;

const ItemContainer = styled("li")`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;

  margin-bottom: 10px;
`;

export const UserSelectItemStyles = () => ({
  TextFieldContainer,
  ItemContainer,
});
