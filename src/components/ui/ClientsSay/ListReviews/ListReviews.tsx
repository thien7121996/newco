import { useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { ItemReview } from "./ItemReview";
import {
  ListReviewsBlock,
  ListReviewsSection,
  ListReviewsWrapper,
} from "./styles";
export const ListReviews = () => {
  const swiperRef = useRef<{ swiper: SwiperType }>(null);

  return (
    <ListReviewsWrapper>
      <ListReviewsSection>
        <Swiper
          ref={swiperRef}
          // Install modules
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          autoplay={{ delay: 1200000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <ListReviewsBlock>
              <ItemReview />
              <ItemReview />
              <ItemReview />
              <ItemReview />
            </ListReviewsBlock>
          </SwiperSlide>
          <SwiperSlide>
            <ListReviewsBlock>
              <ItemReview />
              <ItemReview />
              <ItemReview />
              <ItemReview />
            </ListReviewsBlock>
          </SwiperSlide>
          <SwiperSlide>
            <ListReviewsBlock>
              <ItemReview />
              <ItemReview />
              <ItemReview />
              <ItemReview />
            </ListReviewsBlock>
          </SwiperSlide>
          <SwiperSlide>
            <ListReviewsBlock>
              <ItemReview />
              <ItemReview />
              <ItemReview />
              <ItemReview />
            </ListReviewsBlock>
          </SwiperSlide>
        </Swiper>
      </ListReviewsSection>
    </ListReviewsWrapper>
  );
};
