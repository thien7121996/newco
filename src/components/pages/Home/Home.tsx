/* eslint-disable @next/next/no-img-element */
import { BannerWrapper } from "./styles";
import { CarrerNews } from "@/components/ui/CarrerNews";
import { FlowOfUs } from "@/components/ui/FlowOfUs/FlowOfUs";
import BannerHome from "@/styles/assets/bannerHome.png";

export const Home = () => {
  return (
    <>
      <BannerWrapper>
        <img src={BannerHome.src} alt="Logo" />
      </BannerWrapper>
      <CarrerNews />
      <FlowOfUs />
    </>
  );
};
Home.displayName = "Home";
