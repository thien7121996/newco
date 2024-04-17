"use client";
import { atom, useSetAtom } from "jotai";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import { EffectFade, Parallax } from "swiper/modules";
import { Swiper } from "swiper/types";
import { MainBanner } from "./Banner/MainBanner";
import { CustomNavigation } from "./CustomNavigation";
import MainBannerImage from "./assets/main-banner.png";
import VectorBackground from "./assets/vector-background.svg";
import { BackgroundWrapper, HomeBannersWrapper, VectorWrapper } from "./styles";
import { SwiperSlider } from "@/components/ui/Swiper";

export const homeSwiper = atom<Swiper | null>(null);

export const HomeBanners = () => {
  const setSwiper = useSetAtom(homeSwiper);

  const handleSwiper = useCallback(
    (swiper: Swiper) => {
      setSwiper(swiper);
    },
    [setSwiper],
  );

  const background = useMemo(
    () => (
      <BackgroundWrapper
        data-swiper-parallax-scale="1.5"
        data-swiper-parallax-opacity="0.8"
        data-swiper-parallax-duration="5000"
      >
        <Image
          src={MainBannerImage.src}
          width={MainBannerImage.width}
          height={MainBannerImage.height}
          alt="main-banner"
          loading="lazy"
          unoptimized
        />
      </BackgroundWrapper>
    ),
    [],
  );

  const banners = useMemo(
    () => [
      { id: 0, children: <MainBanner /> },
      { id: 1, children: <MainBanner /> },
      { id: 2, children: <MainBanner /> },
      { id: 3, children: <MainBanner /> },
    ],
    [],
  );

  const navigationItems = useMemo(
    () => [
      { id: 0, itemText: "Human and technology" },
      { id: 1, itemText: "Human and technology" },
      { id: 2, itemText: "Human and technology" },
      { id: 3, itemText: "Human and technology" },
    ],
    [],
  );

  const customNav = useMemo(
    () => <CustomNavigation navItems={navigationItems} />,
    [navigationItems],
  );

  const config = { effect: "fade", modules: [EffectFade, Parallax] };

  return (
    <HomeBannersWrapper>
      <SwiperSlider
        banners={banners}
        customNavigation={customNav}
        onSwiper={handleSwiper}
        config={config}
      >
        {background}
      </SwiperSlider>
      <VectorWrapper>
        <Image src={VectorBackground} alt="vector background" />
      </VectorWrapper>
    </HomeBannersWrapper>
  );
};
