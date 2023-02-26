import React, { useEffect, useMemo, useState } from "react";
import { IUserModel } from "lib/models/IUserModel";
import { getLocalStorageUser } from "lib/services/sessionStorage";
import UserSelectItem from "components/UserSelect/UserSelectItem";
import { AuthPageStyles } from "routes/pages/AuthPage/AuthPage.styles";

const UserSelect = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);

  const isUsers = useMemo(() => !!users.length, [users]);

  useEffect(() => {
    setUsers(getLocalStorageUser());
  }, []);

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
