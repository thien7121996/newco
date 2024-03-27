import Image from "next/image";
import React from "react";
import ArrowIcon from "./assets/arrow-icon.svg";
import MainBannerImage from "./assets/main-banner.png";
import {
  BackgroundWrapper,
  Content,
  MainBannerWrapper,
  Slogan,
  Title,
} from "./styles";
import { Button } from "@/components/ui/Button";

export const MainBanner = () => {
  return (
    <MainBannerWrapper>
      <BackgroundWrapper>
        <Image
          src={MainBannerImage.src}
          width={MainBannerImage.width}
          height={MainBannerImage.height}
          alt="main-banner"
        />
      </BackgroundWrapper>
      <Content>
        <Title>
          <span>CodeCraft:</span>
          <span>Crafting Digital Experiences</span>
        </Title>
        <Slogan>
          Empowering joy through the fusion of technology and human touch.
        </Slogan>
        <Button text={"Go"} icon={ArrowIcon}></Button>
      </Content>
    </MainBannerWrapper>
  );
};
