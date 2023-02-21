import React, { useEffect } from "react";
import { getSessionUser } from "lib/services/sessionStorage";
import { useAppDispatch } from "hooks/useStoreHooks";
import { changeUserAuth } from "store/reducers/userSlice/userSlice";

const UserInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = getSessionUser();
    if (user) {
      dispatch(changeUserAuth(JSON.parse(user)));
    }
  }, []);
  return null;
};

export default React.memo(UserInit);
