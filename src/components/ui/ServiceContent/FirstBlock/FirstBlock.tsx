import Image from "next/image";
import React from "react";
import ContentImage from "./assets/content-image.svg";
import { ContentBlock } from "@/components/ui/ServiceContent/ContentBlock";

const headerContent = { label: "label", title: "Development \nMethodologies" };

export const FirstBlock = () => {
  return (
    <ContentBlock label={headerContent.label} title={headerContent.title}>
      <Image src={ContentImage} alt="technologies" />
    </ContentBlock>
  );
};
