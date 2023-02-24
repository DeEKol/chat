import React, { useMemo } from "react";
import { styled } from "@mui/material";
import MessageText from "components/Message/MessageText/MessageText";
import MessageImage from "components/Message/MessageImage/MessageImage";
import { IMessageModel } from "lib/models/IMessageModel";
import { useAppSelector } from "hooks/useStoreHooks";

const Message = (props: IMessageModel) => {
  const { type, user, createdAt, text, response } = props;
  const userId = useAppSelector((state) => state.userSlice.id);

  const isMy = useMemo(() => userId === user.id, [user, userId]);

  return (
    <ContainerSC isMy={isMy}>
      {type === "text" && (
        <MessageText
          text={text}
          user={user}
          createdAt={createdAt}
          response={response}
        />
      )}
      {type === "image" && <MessageImage />}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")<{ isMy: boolean }>`
  background-color: lightblue;
  color: white;
  border-radius: 10px;
  max-width: 80%;

  padding: 10px;
  margin-bottom: 10px;

  align-self: ${({ isMy }) => (isMy ? "flex-end" : "flex-start")};
  text-align: ${({ isMy }) => (isMy ? "right" : "left")};
`;

export default React.memo(Message);
