import { useAtom } from "jotai";
import React, { FC, useEffect, useState } from "react";
import { Swiper } from "swiper/types";
import {
  CustomNavWrapper,
  IndexWrapper,
  NavItemWrapper,
  NavItemsWrapper,
  NavText,
  ScrollbarWrapper,
  Track,
} from "./styles";
import { homeSwiper } from "@/components/ui/HomeBanners";

type NavItemType = {
  id: number;
  itemText: string;
};

type Props = { navItems?: NavItemType[] };

export const CustomNavigation: FC<Props> = ({ navItems }) => {
  const [swiper] = useAtom(homeSwiper);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    swiper?.on("slideChange", (swiper: Swiper) => {
      setActiveIndex(swiper.activeIndex);
    });
  }, [swiper]);

  if (!navItems?.length) {
    return null;
  }

  const ratio = 100 / navItems.length;
  const paddingPerItem = 80 / navItems.length;

  const handleClick = (index: number) => {
    swiper?.slideTo(index);
  };

  return (
    <CustomNavWrapper>
      <NavItemsWrapper>
        {navItems.map((navItem, index) => (
          <NavItemWrapper
            key={navItem.id}
            $ratio={ratio}
            $paddingPerItem={paddingPerItem}
            $isActive={activeIndex === index}
            $isCursor={activeIndex !== index}
            onClick={() => handleClick(index)}
          >
            <IndexWrapper $isShow={activeIndex === index}>
              {index + 1}
            </IndexWrapper>
            <NavText>{navItem.itemText}</NavText>
          </NavItemWrapper>
        ))}
      </NavItemsWrapper>
      <ScrollbarWrapper>
        <Track $translateX={100 * activeIndex} $ratio={ratio}></Track>
      </ScrollbarWrapper>
    </CustomNavWrapper>
  );
};
