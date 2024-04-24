"use client";

import styled from "styled-components";

export const MainArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
  padding: 24px;
  justify-content: space-between;
  background-color: #ffedf0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h3`
  white-space: pre-line;
  font-family: "PP Telegraf";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.0025em;
  text-transform: capitalize;
  color: #141416;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
