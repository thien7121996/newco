"use client";
import styled from "styled-components";
import BackgroundDownload from "@/styles/assets/bgdownload.png";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 175px 96px;
  gap: 32px;
  position: relative;
  /* height: 416px; */
  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)),
    url(${BackgroundDownload.src}); */
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  /* background-size: cover; */

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    padding: 40px 24px;
    gap: 32px;
    height: auto;
  }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;

  img {
    object-fit: cover;
    height: 102%;
  }
`;

export const DownloadSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    font-style: normal;
    position: relative;
    font-weight: 800;
    font-size: 48px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.005em;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary_0};
    @media (max-width: ${MEDIA_QUERY.TABLET}) {
      font-style: normal;
      font-weight: 800;
      font-size: 40px;
      line-height: 48px;
    }
  }
  p {
    font-weight: 400;
    position: relative;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.0025em;
    color: ${({ theme }) => theme.colors.secondary_100};
    margin: 0;
  }
`;
export const ButtonDownload = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  background: transparent;
  color: #fff;
  justify-content: space-arround;

  width: 253px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_100};
  border-radius: 4px;
  margin: auto;
  z-index: 1;

  > span {
    width: 187px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.0125em;
    color: #ffffff;
    text-align: left;
  }
`;
