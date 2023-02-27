import React from "react";
import UserSelectItem from "components/UserSelect/UserSelectItem/UserSelectItem";
import { AuthPageStyles } from "routes/pages/AuthPage/AuthPage.styles";
import { useUserSelect } from "components/UserSelect/useUserSelect";

const UserSelect = () => {
  const { isUsers, users } = useUserSelect();
  return isUsers ? (
    <>
      <TitleCS>Войти как:</TitleCS>
      <ul>
        {users.map((user) => (
          <UserSelectItem
            key={user.id}
            {...user}
          />
        ))}
      </ul>
    </>
  ) : null;
};

const { TitleCS } = AuthPageStyles();

export default React.memo(UserSelect);
