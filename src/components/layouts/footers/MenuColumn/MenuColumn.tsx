import Link from "next/link";
import { ListMenuFooter, ItemMenu } from "./styles";

export const MenuColumn = () => {
  return (
    <ListMenuFooter>
      <ItemMenu>
        <Link href="/" passHref legacyBehavior>
          <a href="#">About us</a>
        </Link>
      </ItemMenu>
      <ItemMenu>
        <Link href="/" passHref legacyBehavior>
          <a href="#">About Service</a>
        </Link>
      </ItemMenu>
      <ItemMenu>
        <Link href="/" passHref legacyBehavior>
          <a href="#">Offshore Software</a>
        </Link>
      </ItemMenu>
      <ItemMenu>
        <Link href="/" passHref legacyBehavior>
          <a href="#">Web Application Development</a>
        </Link>
      </ItemMenu>
    </ListMenuFooter>
  );
};

MenuColumn.displayName = "MenuColumn";
