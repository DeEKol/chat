import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { useMemo, useRef } from "react";
import { handleChangeResponse } from "store/reducers/roomSlice/roomSlice";
import { IMessageProps } from "components/Message/Message";

export const useMessage = (props: IMessageProps) => {
  const { response } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { type, user, createdAt, text } = props;
  const userId = useAppSelector((state) => state.userSlice.id);
  const dispatch = useAppDispatch();

  const isMy = useMemo(() => userId === user.id, [user, userId]);

  const handleClick = () => {
    dispatch(
      handleChangeResponse({
        ...props,
        scrollTop: ref.current?.offsetTop || 0,
      }),
    );
  };
  return { ref, response, isMy, handleClick, createdAt, user, type, text };
};
