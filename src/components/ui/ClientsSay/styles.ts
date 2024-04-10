import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";
export const ClientsSaysWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  margin: 140px 0 0;
  padding-bottom: 80px;
`;
export const ClientsSaysSection = styled.div`
  display: flex;
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
export const ClientsSayBlockLeft = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 100%;
  }
`;
export const ClientsSayBlockRight = styled.div`
  width: 30%;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 100%;
  }
`;
export const ClientsSayHeading = styled.h3`
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: #141416;
`;
