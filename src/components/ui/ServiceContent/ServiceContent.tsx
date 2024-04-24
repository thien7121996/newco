import React from "react";
import { FirstBlock } from "./FirstBlock";
import { SecondBlock } from "./SecondBlock";
import { ServiceContentWrapper } from "./styles";

export const ServiceContent = () => {
  return (
    <ServiceContentWrapper>
      <FirstBlock />
      <SecondBlock />
    </ServiceContentWrapper>
  );
};
