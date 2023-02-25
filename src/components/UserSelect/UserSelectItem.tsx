import React, { FormEvent, useState } from "react";
import { Button, styled, TextField } from "@mui/material";
import { IUserModel } from "lib/models/IUserModel";
import { handleChangeUserAuth } from "store/reducers/userSlice/userSlice";
import { useAppDispatch } from "hooks/useStoreHooks";
import { useNavigate, useNavigation } from "react-router-dom";
import {
  deleteLocalStorageUser,
  getLocalStorageUser,
} from "lib/services/sessionStorage";

const UserSelectItem = (props: IUserModel) => {
  const { id, lastname, name } = props;
  const [room, setRoom] = useState("");

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(handleChangeUserAuth(props));
    setTimeout(() => {
      navigate(`/${room}`);
    }, 4);
  };

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

const TextFieldContainer = styled("div")`
  margin: 10px 0;
`;

const ItemContainer = styled("li")`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;

  margin-bottom: 10px;
`;

export default UserSelectItem;
