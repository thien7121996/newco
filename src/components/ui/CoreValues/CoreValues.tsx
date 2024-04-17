"use client";
import { BlockWrapper, ListCoreValues } from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
import { BoxIcon } from "@/components/ui/BoxIcon";
import { RowPage } from "@/components/ui/RowPage";
import IconCore from "@/styles/assets/iconcore.png";

export const CoreValues = () => {
  return (
    <RowPage>
      <BlockWrapper>
        <BlockHeading
          title="Core Values"
          subTitle="About Us"
          content="Established in 2019, Corize offers first-class software solutions for hundreds of Asia-Pacific (APAC) regions, specializing in Japan. We embrace the most cutting-edge technology and provide services with the utmost professionalism.
          For 5 years+, with a team that well-trained and experienced IT experts, we have delivered your projects on time, with top quality and no compromises."
        />
        <ListCoreValues>
          <BoxIcon
            title="Responsibility"
            content="Listen to your own heart and conscience. The willingness to accept responsibility is the starting point of self-esteem"
            imageUrl={IconCore.src}
          />
          <BoxIcon
            title="Responsibility"
            content="Listen to your own heart and conscience. The willingness to accept responsibility is the starting point of self-esteem"
            imageUrl={IconCore.src}
          />
          <BoxIcon
            title="Responsibility"
            content="Listen to your own heart and conscience. The willingness to accept responsibility is the starting point of self-esteem"
            imageUrl={IconCore.src}
          />
        </ListCoreValues>
      </BlockWrapper>
    </RowPage>
  );
};
CoreValues.displayName = "CoreValues";
