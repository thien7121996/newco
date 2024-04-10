import { CaseStudyWrapper, CaseStudySection, CaseStudyList } from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
import { NewItem } from "@/components/ui/NewItem";
import Blog1 from "@/styles/assets/blog1.png";
import Blog2 from "@/styles/assets/blog2.png";
export const CaseStudy = () => {
  return (
    <CaseStudyWrapper>
      <CaseStudySection>
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
        </CaseStudyList>
        <BlockHeading
          subTitle="STATISTICS"
          title="CASE STUDY"
          content="Your attention and consideration will lead the Republic of Korea It creates a space of shining intelligence."
          textButton="Learn More"
        />
      </CaseStudySection>
    </CaseStudyWrapper>
  );
};
CaseStudy.displayName = "CaseStudy";
