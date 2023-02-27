import { Button, styled, TextField } from "@mui/material";
import React from "react";
import { useChatField } from "components/Chat/ChatField/useChatField";
import { useAppSelector } from "hooks/useStoreHooks";
import ChatFieldResponse from "components/Chat/ChatField/ChatFieldResponse/ChatFieldResponse";

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

export default React.memo(ChatField);
