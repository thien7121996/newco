import Image from "next/image";
import { useRef, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { BlockItemSwiper } from "./BlockItemSwiper";
import {
  BlockSwiperSection,
  BlockSwiperWrapper,
  LabelActive,
  LabelTotal,
  ProgressBar,
  SwiperArrow,
  SwiperButtonAction,
  SwiperControl,
  SwiperMain,
  SwiperSectionFraction,
  SwiperSectionFractionText,
  SwiperSectionProgress,
  SwiperWrapper,
} from "./styles";
import ArrowLeft from "@/styles/assets/arrow-left-sw.png";
import ArrowRight from "@/styles/assets/arrow-right-sw.png";
import PauseIcon from "@/styles/assets/pause.png";
import PlayIcon from "@/styles/assets/play.png";

export const BlockSwiper = () => {
  const swiperRef = useRef<{ swiper: SwiperType }>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [lengthSwiper, setLengthSwiper] = useState<number>(3);
  const [currentSwiper, setCurrentSwiper] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const pauseSwiper = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
      setIsPlaying(false);
    }
  };

  const playSwiper = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
      setIsPlaying(true);
    }
  };
  return (
    <BlockSwiperWrapper>
      <BlockSwiperSection>
        <SwiperMain>
          <SwiperWrapper>
            <Swiper
              ref={swiperRef}
              // Install modules
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              autoplay={{ delay: 5500, disableOnInteraction: false }}
              onSwiper={(swiper: SwiperType) => {
                setLengthSwiper(swiper.slides.length);
              }}
              onSlideChange={(swiper: SwiperType) => {
                const swiperLength = swiper.slides.length;
                setCurrentSwiper(swiper.activeIndex + 1);
                const swiperIndex = swiper.activeIndex + 1;
                const progress = (swiperIndex * 100) / swiperLength;
                setProgress(progress);
              }}
            >
              <SwiperSlide>
                <BlockItemSwiper />
              </SwiperSlide>
              <SwiperSlide>
                <BlockItemSwiper />
              </SwiperSlide>
              <SwiperSlide>
                <BlockItemSwiper />
              </SwiperSlide>
              {/* Add more SwiperSlide components as needed */}
            </Swiper>
          </SwiperWrapper>
          <SwiperSectionFraction>
            <SwiperSectionProgress>
              <ProgressBar $progress={progress} />
            </SwiperSectionProgress>
            <SwiperSectionFractionText>
              <LabelActive>{currentSwiper}</LabelActive>
              <LabelTotal>/ {lengthSwiper}</LabelTotal>
            </SwiperSectionFractionText>
            {isPlaying ? (
              <SwiperButtonAction onClick={() => pauseSwiper()}>
                <Image src={PauseIcon.src} alt="" height={16} width={16} />
              </SwiperButtonAction>
            ) : (
              <SwiperButtonAction onClick={() => playSwiper()}>
                <Image src={PlayIcon.src} alt="" height={16} width={16} />
              </SwiperButtonAction>
            )}
          </SwiperSectionFraction>
        </SwiperMain>
        <SwiperControl>
          <SwiperArrow ref={navigationPrevRef} className="prev">
            <Image src={ArrowLeft.src} alt="" width={20} height={20} />
          </SwiperArrow>

          {/* Custom Next Arrow */}
          <SwiperArrow ref={navigationNextRef} className="next">
            <Image src={ArrowRight.src} alt="" width={20} height={20} />
          </SwiperArrow>
        </SwiperControl>
      </BlockSwiperSection>
    </BlockSwiperWrapper>
  );
};
BlockSwiper.displayName = "BlockSwiper";
