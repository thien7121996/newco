import { atom, useSetAtom } from "jotai";
import Image from "next/image";
import { LegacyRef, forwardRef, useCallback, useRef } from "react";
import { Menu } from "./Menu";
import { MenuLanguage } from "./MenuLanguage/MenuLanguage";
import MenuButtonIcon from "./assets/menu-icon.svg";
import {
  HeaderSection,
  HeaderWrapper,
  HeaderLogo,
  HeaderMenu,
  HeaderLanguage,
  HeaderButton,
  FirstHeaderSection,
  MenuButton,
  MenuContentWrapper,
  MenuContentWrapper1,
} from "./styles";
import { useHeaderAnimation } from "./useHeaderAnimation";
import { Button } from "@/components/ui/Button";
import ArrowRight from "@/styles/assets/arrow-right.png";
import Logo from "@/styles/assets/logo.png";

export const menuActiveStatus = atom(false);

type Props = { isMobile: boolean };

export const Header = forwardRef<object, Props>(({ isMobile }, ref) => {
  const headerContainer = useRef<HTMLDivElement>(null);
  const setMenuActive = useSetAtom(menuActiveStatus);

  const { handleHideAnimate, handleShowAnimate } =
    useHeaderAnimation(headerContainer);

  const handleToggle = useCallback(() => {
    setMenuActive((prev) => {
      if (prev) {
        handleHideAnimate();
      } else {
        handleShowAnimate();
      }

      return !prev;
    });
  }, [handleHideAnimate, handleShowAnimate, setMenuActive]);

  return (
    <HeaderWrapper>
      <HeaderSection ref={headerContainer}>
        <FirstHeaderSection ref={ref as LegacyRef<HTMLDivElement>}>
          <HeaderLogo>
            <Image src={Logo.src} alt="Logo" width={170} height={43} />
          </HeaderLogo>
          <MenuButton onClick={handleToggle}>
            <Image
              src={MenuButtonIcon}
              width={24}
              height={24}
              alt="menu-button-icon"
            />
          </MenuButton>
        </FirstHeaderSection>
        {isMobile && <MenuContentWrapper1 className="menu-content-wrapper" />}
        <MenuContentWrapper className="menu-content">
          <HeaderMenu>
            <Menu />
          </HeaderMenu>
          <HeaderButton>
            <HeaderLanguage>
              <MenuLanguage />
            </HeaderLanguage>
            <Button text="Contact Form" icon={ArrowRight.src} />
          </HeaderButton>
        </MenuContentWrapper>
      </HeaderSection>
    </HeaderWrapper>
  );
});

Header.displayName = "Header";
