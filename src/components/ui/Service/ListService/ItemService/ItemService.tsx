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
    <ItemServiceSection>
      <ItemServiceImage>
        <Image src={imageUrl} alt="" width={75} height={72} />
      </ItemServiceImage>
      <ItemServiceTitle>{title}</ItemServiceTitle>
      <ItemServiceContent>{content}</ItemServiceContent>
    </ItemServiceSection>
  );
};
