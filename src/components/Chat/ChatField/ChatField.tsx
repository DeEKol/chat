import { Button, styled, TextField } from "@mui/material";
import React from "react";

const ChatField = () => {
  return (
    <FormSC>
      <TextField
        fullWidth
        multiline
        maxRows={4}
        label="Сообщения"
      />
      <Button variant="contained">Отправить</Button>
    </FormSC>
  );
};

const FormSC = styled("form")`
  display: flex;

  position: sticky;
  bottom: 0;
  background-color: white;

  padding-top: 10px;
`;

export default React.memo(ChatField);
