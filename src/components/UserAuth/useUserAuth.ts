import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useAppDispatch } from "hooks/useStoreHooks";
import { userAuth } from "store/reducers/userSlice/userSlice";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export const useUserAuth = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [room, setRoom] = useState<string>(id || "");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      userAuth({
        name,
        lastname,
        roomsData: [],
        currentRoom: room,
        id: Date.now(),
      }),
    );
    setName("");
    setLastname("");
    setRoom("");

    navigate(`/${room}`);
  };

  const handleChangeValue = (setState: Dispatch<SetStateAction<string>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };
  };

  const handleChangeName = handleChangeValue(setName);
  const handleChangeLastname = handleChangeValue(setLastname);
  const handleChangeRoom = handleChangeValue(setRoom);

  return {
    name,
    lastname,
    room,
    handleSubmit,
    handleChangeName,
    handleChangeLastname,
    handleChangeRoom,
    id,
  };
};
