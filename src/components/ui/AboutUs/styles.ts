import styled from "styled-components";
import BGAboutUs from "@/styles/assets/bg-abouus.png";
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
`;
export const AboutUsBlock = styled.div`
  flex: 1;
  width: 33%;
`;
export const AboutUsBlockLeft = styled(AboutUsBlock)``;
export const AboutUsBlockMiddle = styled(AboutUsBlock)`
  display: flex;
  align-items: end;
  & img {
    width: 100%;
    object-fit: cover;
  }
`;
export const AboutUsBlockRight = styled(AboutUsBlock)``;
