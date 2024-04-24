import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const ContactUsWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  padding-bottom: 80px;
`;

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  /* Auto layout */
  display: flex;
  flex-direction: column;

  width: 90%;

  margin: auto;
  gap: 32px;
  flex-basis: 33%;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 100%;
    flex-direction: column;
    flex-basis: 100%;
  }
`;
