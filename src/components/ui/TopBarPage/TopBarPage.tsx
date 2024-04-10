import Image from "next/image";
import { FC } from "react";
import {
  TopBarBreadcrumb,
  TopBarIcon,
  TopBarPageSection,
  TopBarPageWraper,
  TopBarText,
} from "./styles";
import HomeIcon from "@/styles/assets/homeicon.png";

type Props = {
  headingPage: string;
};

export const TopBarPage: FC<Props> = ({ headingPage }) => {
  return (
    <TopBarPageWraper>
      <TopBarPageSection>
        <TopBarBreadcrumb>
          <TopBarIcon>
            <Image alt="" src={HomeIcon.src} width={40} height={40} />
          </TopBarIcon>
          <TopBarText>{headingPage}</TopBarText>
        </TopBarBreadcrumb>
      </TopBarPageSection>
    </TopBarPageWraper>
  );
};

TopBarPage.displayName = "TopBarPage";
