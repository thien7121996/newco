import Image from "next/image";
import { MenuColumn } from "./MenuColumn";
import {
  Divided,
  FooterBottom,
  FooterColumn,
  FooterCopyRight,
  FooterMain,
  FooterMainColumn,
  FooterMenuBottom,
  FooterSection,
  FooterSocial,
  FooterWrapper,
  HeadingFooter,
} from "./styles";
import Facebook from "@/styles/assets/facebook.png";
import Linkedin from "@/styles/assets/linkedin.png";
import LogoFooter from "@/styles/assets/logofooter.png";
import Subtract from "@/styles/assets/subtract.png";
/**
 * Footer layout component
 */
export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterMain>
          <FooterMainColumn>
            <Image
              src={LogoFooter.src}
              width={196}
              height={50}
              alt="Logo Footer"
            />
            <p>
              Tokyo, Minato-ku, Roppongi 6-1-20
              <br />
              Roppongi Denki Building 7F
            </p>
          </FooterMainColumn>
          <FooterColumn>
            <HeadingFooter>Company</HeadingFooter>
            <Divided />
            <MenuColumn />
          </FooterColumn>
          <FooterColumn>
            <HeadingFooter>Technology</HeadingFooter>
            <Divided />
            <MenuColumn />
          </FooterColumn>
          <FooterColumn>
            <HeadingFooter>Case Study</HeadingFooter>
            <Divided />
            <MenuColumn />
          </FooterColumn>
        </FooterMain>
        <Divided />
        <FooterBottom>
          <FooterSocial>
            <li>
              <a href="#">
                <Image src={Linkedin.src} alt="" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Facebook.src} alt="" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Subtract.src} alt="" width={32} height={32} />
              </a>
            </li>
          </FooterSocial>
          <FooterMenuBottom>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Settings</li>
          </FooterMenuBottom>
        </FooterBottom>
        <FooterCopyRight>
          <p>© CORIZE INC. 2024.</p>
        </FooterCopyRight>
      </FooterSection>
    </FooterWrapper>
  );
};

Footer.displayName = "Footer";
