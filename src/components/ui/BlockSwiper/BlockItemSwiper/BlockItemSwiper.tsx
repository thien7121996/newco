import Image from "next/image";
import Link from "next/link";
import {
  SwiperItemWrapper,
  SwiperItemTitle,
  SwiperItemContent,
  SwiperItemButton,
} from "./styles";
import ArrowRedPoint from "@/styles/assets/arrow-red-point.png";
import Slide1 from "@/styles/assets/slide1.png";

export const BlockItemSwiper = () => {
  return (
    <SwiperItemWrapper>
      <Image src={Slide1.src} alt="" width={368} height={349} />
      <SwiperItemTitle>Library Remodeling Fundraising Campaign</SwiperItemTitle>
      <SwiperItemContent>
        Future talents and workers who will lead the world will develop their
        dreams Please join us in remodeling the central library so that we can
        improve our skills.
      </SwiperItemContent>
      <SwiperItemButton>
        <Link href="#">
          <span>Contact Form</span>
          <Image src={ArrowRedPoint.src} alt="" width={42} height={24} />
        </Link>
      </SwiperItemButton>
    </SwiperItemWrapper>
  );
};
BlockItemSwiper.displayName = "BlockItemSwiper";
