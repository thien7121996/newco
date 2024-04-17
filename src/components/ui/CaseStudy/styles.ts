"use client";
import styled from "styled-components";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const CaseStudyWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
`;
export const CaseStudySection = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  width: 95%;
  margin: auto;
  gap: 55px;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    flex-direction: column;
    order: 0;
  }
`;
export const CaseStudyList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 70%;
  max-width: 808px;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 100%;
    flex-direction: row;
    overflow: hidden;
    order: 1;
  }
`;
