import { CaseStudyWrapper, CaseStudySection, CaseStudyList } from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
import { NewItem } from "@/components/ui/NewItem";
import PostThumbnail from "@/styles/assets/post-thumbnail.png";
export const CaseStudy = () => {
  return (
    <CaseStudyWrapper>
      <CaseStudySection>
        <CaseStudyList>
          <NewItem
            title="プロダクト開発の実績"
            thumbnailUrl={PostThumbnail.src}
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
