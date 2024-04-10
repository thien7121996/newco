import React, { FC } from "react";
import ArrowIcon from "./assets/arrow-icon.svg";
import { Content, MainBannerWrapper, Slogan, Title } from "./styles";
import { Button } from "@/components/ui/Button";

export const MainBanner: FC = () => {
  return (
    <MainBannerWrapper>
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
