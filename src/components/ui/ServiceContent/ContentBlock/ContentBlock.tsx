import React, { FC, PropsWithChildren } from "react";
import { BlockContent, BlockHeader, Label, Title } from "./styles";

type Props = {
  label: string;
  title: string;
};

export const ContentBlock: FC<PropsWithChildren<Props>> = ({
  label,
  title,
  children,
}) => {
  return (
    <div>
      <BlockHeader>
        <Label>{label}</Label>
        <Title>{title}</Title>
      </BlockHeader>
      <BlockContent>{children}</BlockContent>
    </div>
  );
};
