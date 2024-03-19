import styled from "styled-components";
import BackgroundDownload from "@/styles/assets/bgdownload.png";

export const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 96px;
  gap: 32px;
  height: 416px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)),
    url(${BackgroundDownload.src});
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-size: cover;
`;
export const DownloadSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.005em;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary_0};
  }
  p {
    font-weight: 400;
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
  color: #fff
  justify-content: space-arround;

  width: 253px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.secondary_100};
  border-radius: 4px;
  margin: auto;

  > span {
    width: 187px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.0125em;
    color: #FFFFFF;
    text-align: left;
  }
`;
