import React from "react";
import { Button, TextField } from "@mui/material";
import { IUserModel } from "lib/models/IUserModel";
import { UserSelectItemStyles } from "components/UserSelect/UserSelectItem/UserSelectItem.styles";
import { useUserSelectItem } from "components/UserSelect/UserSelectItem/useUserSelectItem";

const UserSelectItem = (props: IUserModel) => {
  const { onSubmit, name, lastname, room, setRoom } = useUserSelectItem(props);

  return (
    <ItemContainer>
      <form onSubmit={onSubmit}>
        <h2>
          {name} {lastname}
        </h2>
        <TextFieldContainer>
          <TextField
            fullWidth
            label="Комната"
            required
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </TextFieldContainer>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ marginBottom: "10px" }}>
          Войти
        </Button>
      </form>
    </ItemContainer>
  );
};

const { TextFieldContainer, ItemContainer } = UserSelectItemStyles();

export default React.memo(UserSelectItem);
