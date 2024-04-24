import React from "react";
import { ContentWrapper } from "./styles";
import { LimitScreenPixel } from "@/components/ui/LimitScreenPixel";
import { ServiceContent } from "@/components/ui/ServiceContent";
import { ServiceTopList } from "@/components/ui/ServiceTopList";
import { TopBarPage } from "@/components/ui/TopBarPage";

export const Service = () => {
  return (
    <>
      <TopBarPage headingPage="Service" />
      <LimitScreenPixel>
        <ContentWrapper>
          <ServiceTopList />
          <ServiceContent />
        </ContentWrapper>
      </LimitScreenPixel>
    </>
  );
};
