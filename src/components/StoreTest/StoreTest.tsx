import React from "react";
import { useAppSelector } from "hooks/useStoreHooks";
import { RootReducerNamespace } from "store/reducers/rootReducers";

const StoreTest = () => {
  const isAuth = useAppSelector(
    (state) => state[RootReducerNamespace.USER].isAuth,
  );

  return <h1>{isAuth + ""}</h1>;
};

export default React.memo(StoreTest);
