import React from "react";
import { IMessageModel } from "lib/models/IMessageModel";

const MessageText = ({ text }: Pick<IMessageModel, "text">) => {
  return <p>{text}</p>;
};

export default React.memo(MessageText);
