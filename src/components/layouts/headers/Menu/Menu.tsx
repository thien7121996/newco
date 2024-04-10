import { useSetAtom } from "jotai";
import { useCallback } from "react";
import { ItemMenu, LinkItem, MenuWrapper } from "./styles";
import { menuActiveStatus } from "@/components/layouts/headers/Header";

export const Menu = () => {
  const setMenuActive = useSetAtom(menuActiveStatus);

  const closeMenu = useCallback(() => {
    setMenuActive(false);
  }, [setMenuActive]);

  return (
    <MenuWrapper>
      <ItemMenu className="home-menu">
        <LinkItem onClick={closeMenu} href="/">
          Home
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="about-us-menu">
        <LinkItem onClick={closeMenu} href="/">
          About Us
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="service-menu">
        <LinkItem onClick={closeMenu} href="/">
          Service
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="our-clients-menu">
        <LinkItem onClick={closeMenu} href="/our-clients">
          Our clients
        </LinkItem>
      </ItemMenu>
      <ItemMenu className="career-and-new-menu">
        <LinkItem onClick={closeMenu} href="/career-and-news">
          Career and News
        </LinkItem>
      </ItemMenu>
    </MenuWrapper>
  );
};
Menu.displayName = "Menu";
