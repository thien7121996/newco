import Image from "next/image";
import { FC } from "react";
import { ButtonWrapper } from "./styles";

type props = {
  text: string;
  icon: string;
};

export const Button: FC<props> = ({ text, icon }) => {
  return (
    <ButtonWrapper>
      {text} <Image src={icon} alt="" width={20} height={20} />
    </ButtonWrapper>
  );
};

Button.displayName = "Button";
