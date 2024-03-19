/* eslint-disable @next/next/no-img-element */
import { BannerWrapper } from "./styles";
import BannerHome from "@/styles/assets/bannerHome.png";

export const Home = () => {
  return (
    <BannerWrapper>
      <img src={BannerHome.src} alt="Logo" />
    </BannerWrapper>
  );
};
Home.displayName = "Home";
