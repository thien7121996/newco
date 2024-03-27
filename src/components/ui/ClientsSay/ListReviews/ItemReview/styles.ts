import styled from "styled-components";

export const ItemReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  height: 112px;
  width: 45%;
  margin: 20px 0px;
`;
export const ItemReviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;
export const ItemRviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;
export const ItemReviewName = styled.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: #141416;
`;
export const ItemReviewPosition = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: auto;
  letter-spacing: 0.004em;
  color: #777e90;
`;
export const ItemReviewContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: #777e90;
`;
