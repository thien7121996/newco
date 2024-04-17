"use client";
import Image from "next/image";
import { FC } from "react";
import {
  ItemServiceContent,
  ItemServiceImage,
  ItemServiceSection,
  ItemServiceTitle,
} from "./styles";

type Props = {
  title: string;
  content: string;
  imageUrl: string;
};

export const ItemService: FC<Props> = ({ title, content, imageUrl }) => {
  return (
    <ItemServiceSection className="service-icon-section">
      <ItemServiceImage className="service-icon">
        <Image src={imageUrl} alt="service-icon" width={75} height={72} />
      </ItemServiceImage>
      <ItemServiceTitle>{title}</ItemServiceTitle>
      <ItemServiceContent>{content}</ItemServiceContent>
    </ItemServiceSection>
  );
};
