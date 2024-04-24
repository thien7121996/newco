import { first, slice } from "lodash";
import React from "react";
import { Article } from "./Article";
import { MainArticle } from "./MainArticle";
import {
  FirstImage,
  SecondImage,
  ThirdImage,
  FourImage,
  FiveImage,
} from "./assets";
import { ArticleWrapper, ServiceTopListWrapper } from "./styles";

export type ContentType = {
  id: number;
  title: string;
  image: string;
};

const contents: ContentType[] = [
  { id: 1, title: `What’s Service \nWe Support`, image: FirstImage },
  { id: 2, title: `System \nDevelopment`, image: SecondImage },
  { id: 3, title: `Custom Web Development`, image: ThirdImage },
  { id: 4, title: `IOS & Android App`, image: FourImage },
  { id: 5, title: `CMS (Shopify, Wordpress, etc)`, image: FiveImage },
];

const START = 1;

export const ServiceTopList = () => {
  return (
    <ServiceTopListWrapper>
      <MainArticle content={first(contents)} />
      <ArticleWrapper>
        {slice(contents, START).map((content) => (
          <Article key={content.id} content={content} />
        ))}
      </ArticleWrapper>
    </ServiceTopListWrapper>
  );
};
