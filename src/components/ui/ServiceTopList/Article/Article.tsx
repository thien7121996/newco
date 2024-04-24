import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import MoreIcon from "./assets/more-icon.svg";
import {
  ArticleWrapper,
  ImageWrapper,
  Navigate,
  Title,
  Text,
  Icon,
  ArticleContentWrapper,
} from "./styles";
import { ContentType } from "@/components/ui/ServiceTopList";

type Props = { content: ContentType };

export const Article: FC<Props> = ({ content }) => {
  return (
    <ArticleWrapper className="over">
      <Link href={"#"}>
        <ImageWrapper>
          <Image src={content.image} alt={content.title} />
        </ImageWrapper>
        <ArticleContentWrapper>
          <Title>{content.title}</Title>
          <Navigate>
            <Text>More</Text>
            <Icon>
              <Image src={MoreIcon} alt="more icon" />
            </Icon>
          </Navigate>
        </ArticleContentWrapper>
      </Link>
    </ArticleWrapper>
  );
};
