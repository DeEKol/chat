import React from "react";
import { useAppSelector } from "hooks/useStoreHooks";
import AuthPage from "routes/pages/AuthPage/AuthPage";
import Chat from "components/Chat/Chat";

const RoomPage = () => {
  const isAuth = useAppSelector((state) => state.userSlice.id);
  return isAuth ? <Chat /> : <AuthPage />;
};

export default React.memo(RoomPage);
