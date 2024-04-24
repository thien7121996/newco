import React, { FC, PropsWithChildren } from "react";
import { Wrapper } from "./styles";

export const LimitScreenPixel: FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
