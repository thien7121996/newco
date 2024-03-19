import Image from "next/image";
import { Menu } from "./Menu";
import { MenuLanguage } from "./MenuLanguage/MenuLanguage";
import {
  HeaderSection,
  HeaderWrapper,
  HeaderLogo,
  HeaderMenu,
  HeaderLanguage,
  HeaderButton,
} from "./styles";
import { Button } from "@/components/ui/Button";
import ArrowRight from "@/styles/assets/arrow-right.png";
import Logo from "@/styles/assets/logo.png";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderSection>
        <HeaderLogo>
          <Image src={Logo.src} alt="Logo" width={170} height={43} />
        </HeaderLogo>
        <HeaderMenu>
          <Menu />
        </HeaderMenu>
        <HeaderButton>
          <HeaderLanguage>
            <MenuLanguage />
          </HeaderLanguage>
          <Button text="Contact Form" icon={ArrowRight.src} />
        </HeaderButton>
      </HeaderSection>
    </HeaderWrapper>
  );
};
Header.displayName = "Header";
