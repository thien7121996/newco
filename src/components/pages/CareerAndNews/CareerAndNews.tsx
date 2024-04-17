"use client";
import {
  CareerAndNewsSection,
  CareerAndNewsWrapper,
  ColumnCareerNews,
  ListCareerNewsSection,
} from "./styles";
import { ListCaseStudy } from "@/components/ui/ListCaseStudy";
import { PostItem } from "@/components/ui/PostItem";
import Blog1 from "@/styles/assets/blog1.png";
import Blog2 from "@/styles/assets/blog2.png";
import Blog3 from "@/styles/assets/blog3.png";
export const CareerAndNews = () => {
  return (
    <CareerAndNewsWrapper>
      <CareerAndNewsSection>
        <ListCareerNewsSection>
          <ColumnCareerNews>
            <PostItem
              title="プロダクト開発の実績"
              thumbnailUrl={Blog1.src}
              content="あらゆる産業のデジタライゼーションを促進し、社会をアップデートするための価値創造を実現"
            />
          </ColumnCareerNews>
          <ColumnCareerNews>
            <PostItem
              title="プロダクト開発の実績"
              thumbnailUrl={Blog1.src}
              content="あらゆる産業のデジタライゼーションを促進し、社会をアップデートするための価値創造を実現"
              stylePost="horizontal"
            />
            <PostItem
              title="プロダクト開発の実績"
              thumbnailUrl={Blog2.src}
              content="あらゆる産業のデジタライゼーションを促進し、社会をアップデートするための価値創造を実現"
              stylePost="horizontal"
            />
            <PostItem
              title="プロダクト開発の実績"
              thumbnailUrl={Blog3.src}
              content="あらゆる産業のデジタライゼーションを促進し、社会をアップデートするための価値創造を実現"
              stylePost="horizontal"
            />
          </ColumnCareerNews>
        </ListCareerNewsSection>
        <ListCaseStudy />
      </CareerAndNewsSection>
    </CareerAndNewsWrapper>
  );
};

CareerAndNews.displayName = "CareerAndNews";
