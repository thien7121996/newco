import { FC, ReactNode } from "react";
import {
  Autoplay,
  Controller,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { CustomNavigationWrapper } from "./styles";

type BannerType = {
  id: number;
  children: ReactNode;
};

type Props = {
  banners?: BannerType[];
  customNavigation?: ReactNode;
  config?: SwiperProps;
  onSwiper?: (swiper: SwiperType) => void;
};

export const SwiperSlider: FC<Props> = ({
  banners,
  customNavigation,
  config,
  onSwiper,
}) => {
  if (!banners?.length) {
    return null;
  }

  const defaultConfig = {
    autoplay: { delay: 3000, disableOnInteraction: false },
    mousewheel: { releaseOnEdges: true },
    modules: [Controller, Autoplay, Navigation, EffectCoverflow],
    controller: { inverse: true },
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    speed: 1000,
    ...config,
  };

  return (
    <Swiper {...defaultConfig} onSwiper={onSwiper}>
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>{banner.children}</SwiperSlide>
      ))}
      {customNavigation && (
        <CustomNavigationWrapper>{customNavigation}</CustomNavigationWrapper>
      )}
    </Swiper>
  );
};
