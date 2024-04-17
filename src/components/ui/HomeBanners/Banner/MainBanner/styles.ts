"use client";
import styled from "styled-components";

export const MainBannerWrapper = styled.div`
  position: relative;
  padding-bottom: 100px;
  z-index: 2;
`;

export const Content = styled.div`
  padding: 25% 40px 40px 40px;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 784px;
  height: 128px;
  font-family: "PP Telegraf";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 64px;
  letter-spacing: -0.015em;
  color: #ffffff;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin-bottom: 16px;
`;

export const Slogan = styled.h3`
  /* Empowering joy through the fusion of technology and human touch. */

  width: 784px;
  height: 24px;

  /* Body/Body regular normal */
  font-family: "Aeonik Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  letter-spacing: 0.0025em;

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  margin-bottom: 32px;
`;
