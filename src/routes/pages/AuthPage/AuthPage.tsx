import React from "react";
import UserAuth from "components/UserAuth/UserAuth";
import { AuthPageStyles } from "routes/pages/AuthPage/AuthPage.styles";
import UserSelect from "components/UserSelect/UserSelect";
import { useAuthPage } from "routes/pages/AuthPage/useAuthPage";

const AuthPage = () => {
  useAuthPage();
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

export default AuthPage;
