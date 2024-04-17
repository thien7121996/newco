"use client";
import Image from "next/image";
import { FC } from "react";
import {
  BoxIconContent,
  BoxIconImage,
  BoxIconSection,
  BoxIconTitle,
} from "./styles";

type Props = {
  title: string;
  content: string;
  imageUrl: string;
};

export const BoxIcon: FC<Props> = ({ title, content, imageUrl }) => {
  return (
    <BoxIconSection className="service-icon-section">
      <BoxIconImage className="service-icon">
        <Image src={imageUrl} alt="service-icon" width={75} height={72} />
      </BoxIconImage>
      <BoxIconTitle>{title}</BoxIconTitle>
      <BoxIconContent>{content}</BoxIconContent>
    </BoxIconSection>
  );
};
