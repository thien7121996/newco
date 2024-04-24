import { useSetAtom } from "jotai";
import { useCallback, useRef } from "react";
import { ItemMenu, LinkItem, MenuWrapper } from "./styles";
import { useShowNavbar } from "./useShowNavbar";
import { menuActiveStatus } from "@/components/layouts/headers/Header";

export const Menu = () => {
  const scopeRef = useRef<HTMLUListElement>(null);

  const setMenuActive = useSetAtom(menuActiveStatus);

  useShowNavbar(scopeRef);

  const closeMenu = useCallback(() => {
    setMenuActive(false);
  }, [setMenuActive]);

  return (
    <MenuWrapper ref={scopeRef}>
      <ItemMenu className="home-menu">
        <LinkItem onClick={closeMenu} href="/">
          Home
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="about-us-menu">
        <LinkItem onClick={closeMenu} href="/about-us">
          About Us
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="service-menu">
        <LinkItem onClick={closeMenu} href="/service">
          Services
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="our-clients-menu">
        <LinkItem onClick={closeMenu} href="/our-clients">
          Case Studies
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="career-and-new-menu">
        <LinkItem onClick={closeMenu} href="/career-and-news">
          Career And News
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="career-and-new-menu">
        <LinkItem onClick={closeMenu} href="/contact-us">
          Contact Us
        </LinkItem>
      </ItemMenu>
    </MenuWrapper>
  );
};
Menu.displayName = "Menu";
