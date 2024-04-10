import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary_100};
`;

export const LayoutWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const LayoutPageWrapper = styled.div`
  width: 100%;

  margin: 0 auto;

  @media (max-width: ${MEDIA_QUERY.EXTRA_DESKTOP}) {
    width: 100%;
  }
`;

export const FixedSection = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
`;
