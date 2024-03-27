import styled from "styled-components";

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
`;
export const SwiperWrapper = styled.div``;
