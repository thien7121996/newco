import styled from "styled-components";
import { ButtonWrapper } from "@/components/ui/Button/styles";

export const HeaderWrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 70px;
  padding: 0px;
  position: fixed;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.primary_0};
`;

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidthLayout.deskop.fullWidth};
  align-items: center;
  height: 100%;
  > div {
    flex: 1;
  }
`;

export const HeaderLogo = styled.div``;

export const Logo = styled.img``;

export const HeaderMenu = styled.div`
  flex: 0 0 50% !important;
`;

export const Menu = styled.ul``;
export const HeaderLanguage = styled.div``;
export const HeaderButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  height: 100%;

  ${ButtonWrapper} {
    height: 100%;
  }
`;
export const Button = styled.button``;
export const HeaderLanguageButton = styled.div``;
