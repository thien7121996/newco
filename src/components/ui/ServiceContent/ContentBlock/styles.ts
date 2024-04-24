"use client";

import styled from "styled-components";

export const BlockHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.span`
  font-family: "Aeonik Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: #d80027;
`;

export const Title = styled.span`
  font-family: "PP Telegraf";
  font-style: normal;
  font-weight: 800;
  white-space: pre-line;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.0025em;
  text-transform: capitalize;
  color: #141416;
`;

export const BlockContent = styled.div`
  display: flex;
  padding: 64px 0;
  justify-content: center;
`;
