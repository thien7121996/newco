/* eslint-disable @next/next/no-img-element */
import { SectionBG } from "./styles";
import { AboutUs } from "@/components/ui/AboutUs";
import { CarrerNews } from "@/components/ui/CarrerNews";
import { CaseStudy } from "@/components/ui/CaseStudy/CaseStudy";
import { ClientsSay } from "@/components/ui/ClientsSay";
import { FlowOfUs } from "@/components/ui/FlowOfUs/FlowOfUs";
import { HomeBanners } from "@/components/ui/HomeBanners";
import { Partner } from "@/components/ui/Partner";
import { Service } from "@/components/ui/Service";

export const Home = () => {
  return (
    <>
      <HomeBanners />
      <AboutUs />
      <SectionBG>
        <Service />
        <CaseStudy />
        <ClientsSay />
      </SectionBG>
      <Partner />
      <CarrerNews />
      <FlowOfUs />
    </>
  );
};

Home.displayName = "Home";
