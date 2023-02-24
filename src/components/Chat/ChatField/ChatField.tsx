import { Button, styled, TextField } from "@mui/material";
import React from "react";
import { useChatField } from "components/Chat/ChatField/useChatField";

const ChatField = () => {
  const { message, setMessage, onSubmit } = useChatField();

  return (
    <FormSC onSubmit={onSubmit}>
      <TextField
        value={message}
        fullWidth
        multiline
        maxRows={4}
        label="Сообщения"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        type="submit">
        Отправить
      </Button>
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
