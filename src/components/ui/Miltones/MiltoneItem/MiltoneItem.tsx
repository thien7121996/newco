import Image from "next/image";
import { FC } from "react";
import {
  MiltonesContent,
  MiltonesItemWrapper,
  MiltonesItemTitle,
  MiltonesItemContent,
  MiltoneTree,
  MiltoneItemSection,
  MiltoneGap,
} from "./styles";
type Props = {
  title: string;
  content: string;
  imgTree: string;
  align: "left" | "right";
};
export const MiltoneItem: FC<Props> = ({ title, content, imgTree, align }) => {
  return (
    <MiltoneItemSection>
      <MiltonesItemWrapper align={align}>
        <MiltoneGap />
        <MiltonesContent>
          <MiltonesItemTitle>{title}</MiltonesItemTitle>
          <MiltonesItemContent>{content}</MiltonesItemContent>
        </MiltonesContent>
        <MiltoneTree>
          <Image src={imgTree} alt="Miltones1" width={28} height={112} />
        </MiltoneTree>
      </MiltonesItemWrapper>
    </MiltoneItemSection>
  );
};
MiltoneItem.displayName = "MiltoneItem";
