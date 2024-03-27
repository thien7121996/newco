import styled from "styled-components";
import { BlockHeadingContent } from "@/components/ui/BlockHeading/styles";
import VectorService from "@/styles/assets/vector-service.png";
export const ServiceWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  margin: 140px 0px;
`;
export const ServiceSection = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  gap: 55px;
  background: #fff;
`;

export const ServiceListSection = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  width: 95%;
  margin: auto;
  gap: 55px;
  position: relative;
  margin-top: -100px;

  &::after {
    content: "";
    background: url(${VectorService.src}) no-repeat;
    background-size: 98%;
    display: block;
    width: 100%;
    height: 32px;
    position: absolute;
    bottom: -30px;
    background-position: center;
  }
`;
export const ServiceImage = styled.div`
  max-width: 1029px;
  width: 70%;
  height: 570px;
  background: #d9d9d9;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ServiceContent = styled.div`
  width: 28%;
  position: relative;
  display: flex;

  ${BlockHeadingContent} {
    width: 100%;
  }
`;
export const ServiceLabel = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
`;
