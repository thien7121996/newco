import Image from "next/image";
import React, { useMemo } from "react";
import AIcon from "./assets/a.svg";
import BIcon from "./assets/b.svg";
import CIcon from "./assets/c.svg";
import DIcon from "./assets/d.svg";
import EIcon from "./assets/e.svg";
import { PartnerWrapper, Text } from "./styles";
import { SwiperSlider } from "@/components/ui/Swiper";

export const Partner = () => {
  const logoList = useMemo(
    () => [
      {
        id: 0,
        children: <Image src={AIcon} width={150} height={40} alt="icon" />,
      },
      {
        id: 1,
        children: <Image src={BIcon} width={150} height={40} alt="icon" />,
      },
      {
        id: 2,
        children: <Image src={CIcon} width={150} height={40} alt="icon" />,
      },
      {
        id: 3,
        children: <Image src={DIcon} width={150} height={40} alt="icon" />,
      },
      {
        id: 4,
        children: <Image src={EIcon} width={150} height={40} alt="icon" />,
      },
    ],
    [],
  );

  const config = {
    loop: true,
    speed: 2000,
    slidesPerView: 6,
    autoplay: { delay: 0, disableOnInteraction: false },
  };

  return (
    <PartnerWrapper>
      <Text>Trusted by industry leaders</Text>
      <SwiperSlider banners={[...logoList, ...logoList]} config={config} />
    </PartnerWrapper>
  );
};
