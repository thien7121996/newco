import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const CareerAndNewsWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  padding-bottom: 80px;
`;

export const CareerAndNewsSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  width: 95%;
  margin: auto;
  gap: 32px;
  flex-basis: 33%;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 100%;
    flex-direction: column;
    flex-basis: 100%;
  }
`;

export const ListCareerNewsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

export const ColumnCareerNews = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
