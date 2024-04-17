"use client";
import Image from "next/image";
import { useRef } from "react";
import { ListService } from "./ListService/ListService";
import { useAnimateServices } from "./ListService/useAnimateServices";
import {
  ServiceContent,
  ServiceImage,
  ServiceLabel,
  ServiceListSection,
  ServiceSection,
  ServiceWrapper,
  StyledServiceListWrapper,
} from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
import ImageService from "@/styles/assets/image-service.png";
import LabelService from "@/styles/assets/union-label.png";

export const Service = () => {
  const servicesListRef = useRef<HTMLDivElement>(null);

  useAnimateServices(servicesListRef);

  return (
    <ServiceWrapper>
      <ServiceSection>
        <ServiceImage>
          <Image src={ImageService.src} alt="" width={392} height={250} />
        </ServiceImage>
        <ServiceContent>
          <BlockHeading
            subTitle="STATISTICS"
            title="SERVICE"
            content="Your attention and consideration will lead the Republic of Korea It creates a space of shining intelligence."
            textButton="Learn More"
          />
          <ServiceLabel>
            <Image src={LabelService.src} alt="" width={88} height={107} />
          </ServiceLabel>
        </ServiceContent>
      </ServiceSection>
      <StyledServiceListWrapper ref={servicesListRef}>
        <ServiceListSection className="service-list-section">
          <ServiceContent>
            <BlockHeading
              subTitle="STATISTICS"
              title="Service"
              content="Your attention and consideration will lead the Republic of Korea It creates a space of shining intelligence."
              textButton="Learn More"
            />
            <ServiceLabel>
              <Image src={LabelService.src} alt="" width={88} height={107} />
            </ServiceLabel>
          </ServiceContent>
          <ListService />
        </ServiceListSection>
      </StyledServiceListWrapper>
    </ServiceWrapper>
  );
};
Service.displayName = "Service";
