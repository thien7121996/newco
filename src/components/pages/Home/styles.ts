"use client";
import styled from "styled-components";
import BGClient from "@/styles/assets/bg-client.png";
import { MEDIA_QUERY } from "@/utils/screenSize";
export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  row-gap: 80px;
  margin: 80px 0;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    margin: 0;
    row-gap: 40px;
  }
`;
export const BannerWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const SectionBG = styled.div`
  background: url(${BGClient.src}) no-repeat;
  background-position: bottom right;
  background-size: 100% 60%;
  background-color: #f7f7f7;
`;
