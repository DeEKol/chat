import { Button, TextField } from "@mui/material";
import React from "react";
import { useChatField } from "components/Chat/ChatField/useChatField";
import ChatFieldResponse from "components/Chat/ChatField/ChatFieldResponse/ChatFieldResponse";
import { ChatFieldStyles } from "components/Chat/ChatField/ChatField.styles";

const ChatField = () => {
  const { inputRef, message, setMessage, onSubmit, onChange } = useChatField();

  return (
    <FooterSC>
      <ChatFieldResponse />
      <FormSC onSubmit={onSubmit}>
        <InputSC
          type="file"
          accept="image/*"
          multiple={false}
          onChange={onChange}
          ref={inputRef}
        />
        <Button
          variant="contained"
          onClick={() => inputRef.current?.click()}>
          Прикрепить фото
        </Button>
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
    </FooterSC>
  );
};

const { FooterSC, FormSC, InputSC } = ChatFieldStyles();

export default React.memo(ChatField);
