"use client";
import Image from "next/image";
import { WhoWeAreWrapper, BlockImage } from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
import { RowPage } from "@/components/ui/RowPage";
import CorizeAbout from "@/styles/assets/teamphotomain.png";

export const WhoWeAre = () => {
  return (
    <RowPage>
      <WhoWeAreWrapper>
        <BlockHeading
          title="Who we are"
          subTitle="About US"
          content="Established in 2019, Corize offers first-class software solutions for hundreds of Asia-Pacific (APAC) regions, specializing in Japan. We embrace the most cutting-edge technology and provide services with the utmost professionalism.
          For 5 years+, with a team that well-trained and experienced IT experts, we have delivered your projects on time, with top quality and no compromises."
          subContent="<p><strong>Slogan:</strong>Together, coding the future</p>"
        />
        <BlockImage>
          <Image
            src={CorizeAbout.src}
            width={757}
            height={344}
            alt="Corize About"
          />
        </BlockImage>
      </WhoWeAreWrapper>
    </RowPage>
  );
};
