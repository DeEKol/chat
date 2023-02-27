import { FormEvent, useState } from "react";
import { useAppDispatch } from "hooks/useStoreHooks";
import { useNavigate } from "react-router-dom";
import { handleChangeUserAuth } from "store/reducers/userSlice/userSlice";
import { IUserModel } from "lib/models/IUserModel";

export const useUserSelectItem = (props: IUserModel) => {
  const { name, lastname } = props;
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
  return { onSubmit, name, lastname, room, setRoom };
};
