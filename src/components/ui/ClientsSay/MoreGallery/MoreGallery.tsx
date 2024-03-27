import Image from "next/image";
import React from "react";
import ArrowIcon from "./assets/arrow.svg";
import { MoreGalleryWrapper, Text } from "./styles";

export const MoreGallery = () => {
  return (
    <MoreGalleryWrapper>
      <Text>
        <span>MORE</span>
        <span>GALLERYS</span>
      </Text>
      <Image src={ArrowIcon} alt="arrow icon" />
    </MoreGalleryWrapper>
  );
};
