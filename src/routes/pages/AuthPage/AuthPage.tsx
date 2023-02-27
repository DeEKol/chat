import React, { useEffect } from "react";
import UserAuth from "components/UserAuth/UserAuth";
import { AuthPageStyles } from "routes/pages/AuthPage/AuthPage.styles";
import UserSelect from "components/UserSelect/UserSelect";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { handleLogout } from "store/reducers/userSlice/userSlice";
import { useParams } from "react-router-dom";
import { handleChangeResponse } from "store/reducers/roomSlice/roomSlice";

const AuthPage = () => {
  const user = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (user && !id) {
      dispatch(handleLogout());
      dispatch(handleChangeResponse(null));
    }
  }, []);

  return (
    <ContainerSC>
      <WrapperSC>
        <TitleCS>Вход</TitleCS>
        <UserAuth />
        <UserSelect />
      </WrapperSC>
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC, TitleCS } = AuthPageStyles();

export default React.memo(AuthPage);
