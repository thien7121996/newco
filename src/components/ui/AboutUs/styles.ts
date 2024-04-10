import styled from "styled-components";
import BGAboutUs from "@/styles/assets/bg-abouus.png";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const AboutUsWrapper = styled.div`
  display: block;
  max-width: 100%;
  width: 100%;
  padding: 100px 0px;
  background: url(${BGAboutUs.src});
  background-size: cover;
`;
export const AboutUsSection = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  width: 95%;
  margin: auto;
  gap: 32px;
  flex-basis: 33%;

  @media (max-width: ${MEDIA_QUERY.EXTRA_DESKTOP}) {
    flex-direction: column;
    flex-basis: 100%;
  }
`;
export const AboutUsBlock = styled.div`
  flex: 1;
  width: 33%;
  position: relative;

  @media (max-width: ${MEDIA_QUERY.EXTRA_DESKTOP}) {
    width: 100%;
  }
`;

export const AboutUsBlockLeft = styled(AboutUsBlock)`
  position: relative;
  top: 0;
`;

export const AboutUsBlockMiddle = styled(AboutUsBlock)`
  display: flex;
  align-items: end;
  top: 0;
  position: relative;

  & img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: ${MEDIA_QUERY.EXTRA_DESKTOP}) {
    display: none;
  }
`;

export const AboutUsBlockRight = styled(AboutUsBlock)``;
