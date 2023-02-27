import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { handleLogout } from "store/reducers/userSlice/userSlice";
import { handleChangeResponse } from "store/reducers/roomSlice/roomSlice";

export const useAuthPage = () => {
  const user = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (user && !id) {
      dispatch(handleLogout());
      dispatch(handleChangeResponse(null));
    }
  }, []);
};
