import Image from "next/image";
import { FC } from "react";
import {
  PostItemDescription,
  PostItemSection,
  PostItemTitle,
  PostItemWrapper,
  PostItemThumbnail,
  PostItemLabel,
  PostItemContent,
  PostItemDate,
  DateText,
  PostItemContentMain,
} from "./styles";
import ClockIcon from "@/styles/assets/clockico.png";

type Props = {
  title: string;
  thumbnailUrl: string;
  content: string;
  textButton: string;
  stylePost?: "vertical" | "horizontal";
};
export const PostItem: FC<Props> = ({
  title,
  thumbnailUrl,
  content,
  textButton,
  stylePost,
}) => {
  return (
    <PostItemWrapper>
      <PostItemSection type={stylePost ?? "vertical"}>
        <PostItemThumbnail>
          <Image src={thumbnailUrl} alt="" width={392} height={250} />
        </PostItemThumbnail>
        <PostItemContent>
          <PostItemContentMain>
            <PostItemLabel>Label</PostItemLabel>
            <PostItemTitle>{title}</PostItemTitle>
            <PostItemDescription>{content}</PostItemDescription>
          </PostItemContentMain>

          <PostItemDate>
            <Image src={ClockIcon.src} alt="" width={20} height={20} />
            <DateText>2023-06-01</DateText>
          </PostItemDate>
        </PostItemContent>
      </PostItemSection>
    </PostItemWrapper>
  );
};
PostItem.displayName = "PostItem";
