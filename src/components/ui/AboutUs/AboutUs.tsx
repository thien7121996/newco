import Image from "next/image";
import {
  AboutUsBlockLeft,
  AboutUsBlockMiddle,
  AboutUsBlockRight,
  AboutUsSection,
  AboutUsWrapper,
} from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
import { BlockSwiper } from "@/components/ui/BlockSwiper";
import ImageAbout from "@/styles/assets/slide2.png";

export const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <AboutUsSection>
        <AboutUsBlockLeft className="about-us-left">
          <BlockHeading
            title="ABOUT</br>CORIZE"
            subTitle="About US"
            content="The Central Library, which was the precious birthplace of Korean talent development It is imperative to create a space and supplement facilities for the new era."
          />
        </AboutUsBlockLeft>
        <AboutUsBlockMiddle className="about-us-middle">
          <Image src={ImageAbout.src} alt="About Us" width={368} height={463} />
        </AboutUsBlockMiddle>
        <AboutUsBlockRight className="about-us-right">
          <BlockSwiper />
        </AboutUsBlockRight>
      </AboutUsSection>
    </AboutUsWrapper>
  );
};
AboutUs.displayName = "AboutUs";
