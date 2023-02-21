import React from "react";
import { Button, TextField } from "@mui/material";
import { UserAuthStyles } from "components/UserAuth/UserAuth.styles";
import { useUserAuth } from "components/UserAuth/useUserAuth";

const UserAuth = () => {
  const {
    name,
    lastname,
    room,
    handleSubmit,
    handleChangeName,
    handleChangeLastname,
    handleChangeRoom,
  } = useUserAuth();

  return (
    <FormSC onSubmit={handleSubmit}>
      <FormItemContainer>
        <TextField
          label="Имя"
          name="name"
          fullWidth
          value={name}
          onChange={handleChangeName}
          required
        />
      </FormItemContainer>
      <FormItemContainer>
        <TextField
          label="Фамилия"
          name="lastname"
          fullWidth
          value={lastname}
          onChange={handleChangeLastname}
          required
        />
      </FormItemContainer>
      <FormItemContainer>
        <TextField
          label="Комната"
          name="room"
          fullWidth
          type="number"
          inputMode="numeric"
          value={room}
          onChange={handleChangeRoom}
          required
        />
      </FormItemContainer>
      <Button
        variant={"contained"}
        type="submit">
        Войти
      </Button>
    </FormSC>
  );
};

const { FormSC, FormItemContainer } = UserAuthStyles();

export default React.memo(UserAuth);
