import Image from "next/image";
import { ButtonWrapper } from "./styles";
import jpflag from "@/styles/assets/jpflag.png";

export const MenuLanguage = () => {
  return (
    <ButtonWrapper>
      <Image src={jpflag.src} alt="jp flag" width={28} height={28} />
      日本語
    </ButtonWrapper>
  );
};
MenuLanguage.displayName = "MenuLanguage";
