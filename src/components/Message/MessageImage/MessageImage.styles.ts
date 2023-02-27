import { styled } from "@mui/material";

const ImageSC = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: cover;

  max-height: 500px;
`;

export const MessageImageStyles = () => ({
  ImageSC,
});
