import styled from "styled-components";

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
`;
export const CaseStudyList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 70%;
  max-width: 808px;
`;
