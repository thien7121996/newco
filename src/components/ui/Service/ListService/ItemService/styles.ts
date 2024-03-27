import styled from "styled-components";
export const ItemServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;
export const ItemServiceImage = styled.div`
  width: 74.9px;
  height: 72px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ItemServiceTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0025em;
  color: #141416;
`;
export const ItemServiceContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: #777e90;
`;
