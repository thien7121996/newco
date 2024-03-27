import styled from "styled-components";
import { ItemReviewBlock } from "./ItemReview/styles";
export const ListReviewsWrapper = styled.div``;
export const ListReviewsSection = styled.div`
  .swiper-pagination {
    width: 100% !important;
    margin-top: 32px !important;
    display: flex;
    position: relative;
    justify-content: start;
    align-items: center;
  }
  .swiper-pagination-bullet {
    width: 11px !important;
    height: 11px !important;
    border-radius: 50%;

    background: #ffffff !important;
    border: 2px solid #777e90 !important;
  }
  .swiper-pagination-bullet-active {
    width: 80.14px !important;
    height: 11px;
    border: none !important;
    background: #141416 !important;
    border-radius: 784.929px;
  }
`;
export const ListReviewsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  flex-wrap: wrap;
  ${ItemReviewBlock}:nth-child(2n) {
    border-left: 1px solid #f1f1f1;
    padding-left: 24px;
  }
`;
export const ItemReviewName = styled.h4``;
export const ItemReviewPosition = styled.p``;
export const ItemReviewContent = styled.p``;
