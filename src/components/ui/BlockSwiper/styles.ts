import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";
export const SwiperItemWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  & img {
    width: 100%;
  }
`;
export const SwiperItemTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.0015em;
  color: #141416;
`;
export const SwiperItemContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.004em;
  color: #777e90;
`;
export const SwiperItemButton = styled.button`
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.0125em;
  color: #141416;
  margin: 40px 0px;

  background: none;
  & a {
    width: 158px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
    justify-content: center;
    & span {
      width: 70%;
      font-weight: 700;
      font-size: 14px;
      line-height: 14px;
      display: flex;
      align-items: flex-end;
      letter-spacing: 0.0125em;
      color: #141416;
      position: relative;
      top: 1px;
    }
    & img {
      max-width: 42.75;
      width: 30%;
      height: 24;
      object-fit: contain;
    }
  }

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    margin: 0px !important;
  }
`;
export const SwiperWrapper = styled.div``;
export const LabelActive = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: #141416;
`;
export const LabelTotal = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: #b1b5c3;
`;
export const SwiperSectionFraction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 18px;
  max-width: 100%;
`;
export const SwiperSectionProgress = styled.div`
  height: 4px;
  background: #d9d9d9;
  opacity: 1;
  width: 70%;
`;
export const SwiperSectionFractionText = styled.p``;
export const SwiperButtonAction = styled.button`
  background: none;
  border: none;
`;
export const BlockSwiperWrapper = styled.div``;
export const ProgressBar = styled.div<{ $progress: number }>`
  height: 4px;
  width: ${({ $progress }) => $progress}%;
  background: #141416 !important;
`;

export const SwiperControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: relative;
  width: 20%;
  height: 96px;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 50%;
  }
`;
export const SwiperArrow = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 44px;
  height: 44px;

  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.2);
  border-radius: 999px;
`;
export const SwiperMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 75%;
`;
export const BlockSwiperSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;
