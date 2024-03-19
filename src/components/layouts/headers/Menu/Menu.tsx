import { ItemMenu, MenuWrapper } from "./styles";

export const Menu = () => {
  return (
    <MenuWrapper>
      <ItemMenu>
        <a href="#">Home</a>
      </ItemMenu>
      <ItemMenu>
        <a href="#">About Us</a>
      </ItemMenu>
      <ItemMenu>
        <a href="#">Service</a>
      </ItemMenu>
      <ItemMenu>
        <a href="#">Our clients</a>
      </ItemMenu>
      <ItemMenu>
        <a href="#">Career and News</a>
      </ItemMenu>
    </MenuWrapper>
  );
};
Menu.displayName = "Menu";
