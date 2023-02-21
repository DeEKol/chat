import { Button, styled, TextField } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useAppSelector } from "hooks/useStoreHooks";
import { userSlice } from "store/reducers/userSlice/userSlice";
import { IUserModel } from "lib/models/IUserModel";

const ChatField = () => {
  const user = useAppSelector((state) => state.userSlice.userData);
  const [message, setMessage] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    console.log(user);
    if (user.roomsData.find((roomItem) => roomItem.id === user.currentRoom)) {
      console.log("find");
    } else {
      const { roomsData, ...otherUserDate } = user;
      const newUserModel: IUserModel = {
        ...user,
        roomsData: [
          ...roomsData,
          {
            id: user.currentRoom as string,
            message: [
              {
                id: 1,
                text: message,
                date: new Date().toString(),
                user: otherUserDate,
              },
            ],
          },
        ],
      };
      console.log(newUserModel);
    }

    setMessage("");
  };
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
