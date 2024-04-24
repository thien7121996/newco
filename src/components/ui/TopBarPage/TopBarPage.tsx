"use client";
import Image from "next/image";
import { FC } from "react";
import {
  TopBarBreadcrumb,
  TopBarIcon,
  TopBarPageSection,
  TopBarPageWrapper,
  TopBarText,
} from "./styles";
import HomeIcon from "@/styles/assets/homeicon.png";

type Props = {
  headingPage: string;
};

export const TopBarPage: FC<Props> = ({ headingPage }) => {
  return (
    <TopBarPageWrapper>
      <TopBarPageSection>
        <TopBarBreadcrumb>
          <TopBarIcon>
            <Image alt="" src={HomeIcon.src} width={40} height={40} />
          </TopBarIcon>
          <TopBarText>{headingPage}</TopBarText>
        </TopBarBreadcrumb>
      </TopBarPageSection>
    </TopBarPageWrapper>
  );
};

TopBarPage.displayName = "TopBarPage";
