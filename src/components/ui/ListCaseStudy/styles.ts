"use client";
import styled from "styled-components";
import { NewItemWrapper } from "@/components/ui/NewItem/styles";

export const ListCaseStudyWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
`;

export const ListCaseStudySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;
`;

export const CaseStudyList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  ${NewItemWrapper} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;

    background: #ffffff;
    border: 1px solid #e9e9e9;
  }
`;

export const HeadingSection = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.0015em;
  color: #141416;
`;
