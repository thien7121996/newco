import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const TopBarPageWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-left: 0px;
  border-right: 0px;
  margin-bottom: 32px;
`;

export const TopBarPageSection = styled.div`
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

export const TopBarBreadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
`;

export const TopBarIcon = styled.div`
  padding: 1px;

  width: 40px;
  height: 40px;

  background: #d80027;
`;

export const TopBarText = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.004em;
  color: #353945;

  padding: 8px 16px;
  border-right: 1px solid #e9e9e9;
`;
