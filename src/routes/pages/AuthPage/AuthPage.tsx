import React from "react";
import UserAuth from "components/UserAuth/UserAuth";
import { AuthPageStyles } from "routes/pages/AuthPage/AuthPage.styles";

const AuthPage = () => {
  return (
    <ContainerSC>
      <WrapperSC>
        <TitleCS>Вход</TitleCS>
        <UserAuth />
      </WrapperSC>
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC, TitleCS } = AuthPageStyles();

export default React.memo(AuthPage);
