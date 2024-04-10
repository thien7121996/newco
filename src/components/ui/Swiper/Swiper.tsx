import { FC, PropsWithChildren, ReactNode } from "react";
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

export const SwiperSlider: FC<PropsWithChildren<Props>> = ({
  banners,
  customNavigation,
  config,
  onSwiper,
  children,
}) => {
  if (!banners?.length) {
    return null;
  }

  const defaultConfig = {
    autoplay: { delay: 5000, disableOnInteraction: false, else: "ease-out" },
    mousewheel: { releaseOnEdges: true },
    controller: { inverse: true },
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    speed: 2500,
    parallax: true,
    centeredSlides: true,
    ...config,
    modules: [
      Controller,
      Autoplay,
      Navigation,
      EffectCoverflow,
      ...(config?.modules ?? []),
    ],
  };

  return (
    <Swiper {...defaultConfig} effect="fade" onSwiper={onSwiper}>
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>{banner.children}</SwiperSlide>
      ))}

      {children}
      {customNavigation && (
        <CustomNavigationWrapper>{customNavigation}</CustomNavigationWrapper>
      )}
    </Swiper>
  );
};
