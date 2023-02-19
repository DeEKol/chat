import React from "react";
import { useAppSelector } from "hooks/useStoreHooks";
import authPage from "routes/pages/AuthPage/AuthPage";
import AuthPage from "routes/pages/AuthPage/AuthPage";
import Chat from "components/Chat/Chat";

const RoomPage = () => {
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);
  return !isAuth ? <Chat /> : <AuthPage />;
};

export default React.memo(RoomPage);
