import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const BoxIconSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 45%;
  }
`;

export const BoxIconImage = styled.div`
  width: 74.9px;
  height: 72px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const BoxIconTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0025em;
  color: #141416;
`;
export const BoxIconContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: #777e90;
`;
