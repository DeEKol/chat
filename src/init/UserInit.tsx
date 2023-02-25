import React, { useEffect } from "react";
import { getSessionUser } from "lib/services/sessionStorage";
import { useAppDispatch } from "hooks/useStoreHooks";
import { handleChangeUserAuth } from "store/reducers/userSlice/userSlice";
import { useParams } from "react-router-dom";

const UserInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      const user = getSessionUser();
      if (user) {
        dispatch(handleChangeUserAuth(user));
      }
    }
  }, []);
  return null;
};

export default React.memo(UserInit);
