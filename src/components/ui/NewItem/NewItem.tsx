import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  NewItemDescription,
  NewItemSection,
  NewItemTitle,
  NewItemWrapper,
  ButtonSeeMore,
  NewItemThumbnail,
} from "./styles";
import ArrowRedPoint from "@/styles/assets/arrow-red-point.png";

type Props = {
  title: string;
  thumbnailUrl: string;
  content: string;
  textButton: string;
};
export const NewItem: FC<Props> = ({
  title,
  thumbnailUrl,
  content,
  textButton,
}) => {
  return (
    <NewItemWrapper>
      <NewItemSection>
        <NewItemTitle>{title}</NewItemTitle>
        <NewItemThumbnail className="over">
          <Image src={thumbnailUrl} alt="" width={392} height={250} />
        </NewItemThumbnail>
        <NewItemDescription>{content}</NewItemDescription>
        <ButtonSeeMore>
          <Link href="/case-study">
            {textButton}
            <Image src={ArrowRedPoint.src} alt="" width={43} height={24} />
          </Link>
        </ButtonSeeMore>
      </NewItemSection>
    </NewItemWrapper>
  );
};
NewItem.displayName = "NewItem";
