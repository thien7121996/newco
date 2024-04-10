import styled from "styled-components";
import { BlockHeadingContent } from "@/components/ui/BlockHeading/styles";
import VectorService from "@/styles/assets/vector-service.png";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const ServiceWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  margin: 140px 0px;
  padding-bottom: 130px;
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
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 100%;
    height: 320px;
  }
`;

export const ServiceContent = styled.div`
  width: 28%;
  position: relative;
  display: flex;

  ${BlockHeadingContent} {
    width: 100%;
  }
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 100%;

    ${BlockHeadingContent} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      width: 255px;
    }
  }
`;

export const StyledServiceListWrapper = styled.div`
  position: absolute;
`;

export const ServiceLabel = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 1;
`;

export const ServiceListSection = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  width: 95%;
  margin: auto;
  gap: 55px;
  position: relative;
  margin-top: -100px;
  z-index: 1;

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
    z-index: -1;
  }
  ${ServiceContent} {
    display: none;
  }
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 85%;
    margin-left: auto;
    margin-right: 0px;
    padding: 40px 20px;
    margin-top: -150px;
    flex-direction: column;

    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(99, 99, 99, 0.2);

    ${ServiceContent} {
      display: block;
      width: 100%;
      background: #fff;
    }
  }
`;

export const ServiceSection = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  gap: 55px;
  background: #fff;
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    flex-direction: column;

    ${ServiceContent} {
      display: none;
    }
  }
`;
