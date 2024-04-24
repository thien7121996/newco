import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { ImageWrapper, MainArticleWrapper, Title } from "./styles";
import { ContentType } from "@/components/ui/ServiceTopList";

type Props = { content?: ContentType };

export const MainArticle: FC<Props> = ({ content }) => {
  if (!content) {
    return null;
  }

  return (
    <MainArticleWrapper className="over">
      <Link href={"#"}>
        <ImageWrapper>
          <Image src={content.image} alt={content.title} />
        </ImageWrapper>
        <Title>{content.title}</Title>
      </Link>
    </MainArticleWrapper>
  );
};
