"use client";

import styled from "styled-components";

export const ArticleWrapper = styled.div`
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  gap: 32px;
  background: #ffedf0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h3`
  white-space: pre-line;
  font-family: "Aeonik Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0025em;
  color: #141416;
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Text = styled.span`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.0125em;

  color: #777e90;
`;

export const ArticleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Icon = styled.div``;
