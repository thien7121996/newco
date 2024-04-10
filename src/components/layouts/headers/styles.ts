import styled from "styled-components";
import { ButtonWrapper } from "@/components/ui/Button/styles";
import { MEDIA_QUERY } from "@/utils/screenSize";

export const HeaderWrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 70px;
  padding: 0px;
  position: fixed;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.primary_0};

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    height: auto;
  }
`;

export const HeaderSection = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary_0};
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  align-items: center;
  height: 100%;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.div``;

export const Logo = styled.img``;

export const HeaderMenu = styled.div`
  flex: 1 1 50%;
  overflow: hidden;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    order: 3;
    width: 100%;
  }
`;

export const Menu = styled.ul``;

export const HeaderLanguage = styled.div`
  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    width: 45%;
    display: flex;
    justify-content: center;
  }
`;

export const HeaderButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  height: 100%;

  ${ButtonWrapper} {
    height: 100%;
  }

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    order: 2;
    overflow: hidden;
    width: 100%;
    height: auto;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary_300};
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary_300};

    ${ButtonWrapper} {
      width: 55%;
      justify-content: center;
    }
  }
`;
export const Button = styled.button``;
export const HeaderLanguageButton = styled.div``;

export const FirstHeaderSection = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  flex: 1 1 20%;
  height: 100%;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    order: 1;
    width: 100%;
    justify-content: space-between;
  }
`;

export const MenuButton = styled.button`
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    display: block;
  }
`;

export const MenuContentWrapper1 = styled.div`
  background: ${({ theme }) => theme.colors.secondary_900};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  height: 0;
  width: 100%;
  z-index: -1;
`;

export const MenuContentWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary_0};
  flex: 1 1 80%;
  height: 100%;
  max-height: 100%;
  order: 2;
  top: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${MEDIA_QUERY.TABLET}) {
    flex-direction: column;
    z-index: -1;
    height: 0;
    max-height: 0;
    position: absolute;
    width: 100%;
  }
`;
