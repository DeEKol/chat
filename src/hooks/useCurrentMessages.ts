import { useParams } from "react-router-dom";
import { useAppSelector } from "hooks/useStoreHooks";

export const useCurrentMessages = () => {
  const { id: currentRoomId } = useParams();
  const roomsData = useAppSelector((state) => state.userSlice.roomsData);
  const existsMessage =
    roomsData.find((roomItem) => roomItem.id === currentRoomId)?.message || [];
  return { currentRoomId, existsMessage };
};
