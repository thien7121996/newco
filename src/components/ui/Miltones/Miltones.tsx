"use client";
import { MiltoneItem } from "./MiltoneItem";
import { BlockWrapper, MiltonesList } from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
import { RowPage } from "@/components/ui/RowPage";
import ImageTree1 from "@/styles/assets/miltone1.png";
import ImageTree2 from "@/styles/assets/miltone2.png";
import ImageTree3 from "@/styles/assets/miltone3.png";
import ImageTree4 from "@/styles/assets/miltone4.png";
export const Miltones = () => {
  return (
    <RowPage>
      <BlockWrapper>
        <BlockHeading
          title="MILESTONES"
          subTitle="About Us"
          content="Established in 2019, Corize offers first-class software solutions for hundreds of Asia-Pacific (APAC) regions, specializing in Japan. We embrace the most cutting-edge technology and provide services with the utmost professionalism.
          For 5 years+, with a team that well-trained and experienced IT experts, we have delivered your projects on time, with top quality and no compromises."
        />
        <MiltonesList>
          <MiltoneItem
            title="Milestones 1"
            imgTree={ImageTree1.src}
            content="Future talents and workers who will lead the world will develop their dreams Please join us in remodeling the central library so that we can improve our skills."
            align="left"
          />
          <MiltoneItem
            title="Milestones 2"
            imgTree={ImageTree2.src}
            content="Future talents and workers who will lead the world will develop their dreams Please join us in remodeling the central library so that we can improve our skills."
            align="right"
          />
          <MiltoneItem
            title="Milestones 3"
            imgTree={ImageTree3.src}
            content="Future talents and workers who will lead the world will develop their dreams Please join us in remodeling the central library so that we can improve our skills."
            align="left"
          />
          <MiltoneItem
            title="Milestones 4"
            imgTree={ImageTree4.src}
            content="Future talents and workers who will lead the world will develop their dreams Please join us in remodeling the central library so that we can improve our skills."
            align="right"
          />
        </MiltonesList>
      </BlockWrapper>
    </RowPage>
  );
};
Miltones.displayName = "Miltones";
