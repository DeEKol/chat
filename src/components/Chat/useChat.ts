import { useParams } from "react-router-dom";
import { useAppDispatch } from "hooks/useStoreHooks";
import { useEffect } from "react";
import { handleChangeRoom } from "store/reducers/roomSlice/roomSlice";
import { getLocalStorageRoomMessages } from "lib/services/sessionStorage";

export const useChat = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const roomId = id || "";

    dispatch(
      handleChangeRoom({
        id: roomId,
        messages: getLocalStorageRoomMessages(roomId),
      }),
    );
  }, []);
};
