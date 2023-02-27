import { useEffect, useMemo, useState } from "react";
import { IUserModel } from "lib/models/IUserModel";
import { getLocalStorageUser } from "lib/services/sessionStorage";

export const useUserSelect = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);

  const isUsers = useMemo(() => !!users.length, [users]);

  useEffect(() => {
    setUsers(getLocalStorageUser());
  }, []);

  return { isUsers, users };
};
