"use client";
import {
  ListCaseStudySection,
  ListCaseStudyWrapper,
  CaseStudyList,
  HeadingSection,
} from "./styles";
import { NewItem } from "@/components/ui/NewItem";
import Blog1 from "@/styles/assets/blog1.png";
import Blog2 from "@/styles/assets/blog2.png";
import Blog3 from "@/styles/assets/blog3.png";
import PostThumbnail from "@/styles/assets/post-thumbnail.png";

export const ListCaseStudy = () => {
  return (
    <ListCaseStudyWrapper>
      <ListCaseStudySection>
        <HeadingSection>Case Study</HeadingSection>
        <CaseStudyList>
          <NewItem
            title="プロダクト開発の実績"
            thumbnailUrl={Blog1.src}
            content="あらゆる産業のデジタライゼーションを促進し、社会をアップデートするための価値創造を実現"
            textButton="See More"
          />
          <NewItem
            title="プロダクト開発の実績"
            thumbnailUrl={Blog2.src}
            content="あらゆる産業のデジタライゼーションを促進し、社会をアップデートするための価値創造を実現"
            textButton="See More"
          />
          <NewItem
            title="プロダクト開発の実績"
            thumbnailUrl={Blog3.src}
            content="あらゆる産業のデジタライゼーションを促進し、社会をアップデートするための価値創造を実現"
            textButton="See More"
          />
          <NewItem
            title="プロダクト開発の実績"
            thumbnailUrl={PostThumbnail.src}
            content="あらゆる産業のデジタライゼーションを促進し、社会をアップデートするための価値創造を実現"
            textButton="See More"
          />
        </CaseStudyList>
      </ListCaseStudySection>
    </ListCaseStudyWrapper>
  );
};

ListCaseStudy.displayName = "ListCaseStudy";
