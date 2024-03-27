import { atom, useAtom } from "jotai";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import { Swiper } from "swiper/types";
import { MainBanner } from "./Banner/MainBanner";
import { CustomNavigation } from "./CustomNavigation";
import VectorBackground from "./assets/vector-background.svg";
import { HomeBannersWrapper, VectorWrapper } from "./styles";
import { SwiperSlider } from "@/components/ui/Swiper";

export const homeSwiper = atom<Swiper | null>(null);

export const HomeBanners = () => {
  const [, setSwiper] = useAtom(homeSwiper);

  const handleSwiper = useCallback(
    (swiper: Swiper) => {
      setSwiper(swiper);
    },
    [setSwiper],
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

  return (
    <HomeBannersWrapper>
      <SwiperSlider
        banners={banners}
        customNavigation={customNav}
        onSwiper={handleSwiper}
      />
      <VectorWrapper>
        <Image src={VectorBackground} alt="vector background" />
      </VectorWrapper>
    </HomeBannersWrapper>
  );
};
