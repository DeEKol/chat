import { styled } from "@mui/material";

const FooterSC = styled("footer")`
  background-color: #ffffff;
  padding: 5px;
  position: sticky;
  bottom: 0;
`;

const FormSC = styled("form")`
  display: flex;
  align-items: center;

  position: sticky;
  bottom: 0;
  background-color: white;

  padding-top: 10px;
`;

const InputSC = styled("input")`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const ChatFieldStyles = () => ({ FooterSC, FormSC, InputSC });
