import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  row-gap: 80px;
  margin: 80px 0;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    margin: 0;
    row-gap: 40px;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
