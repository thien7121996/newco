import { SectionBG } from "./styles";
import { AboutUs } from "@/components/ui/AboutUs";
import { CareerNews } from "@/components/ui/CareerNews";
import { CaseStudy } from "@/components/ui/CaseStudy/CaseStudy";
import { ClientsSay } from "@/components/ui/ClientsSay";
import { DownloadUs } from "@/components/ui/DownloadUs";
import { FlowOfUs } from "@/components/ui/FlowOfUs/FlowOfUs";
import { HomeBanners } from "@/components/ui/HomeBanners";
import { Partner } from "@/components/ui/Partner";
import { Service } from "@/components/ui/Service";

export const Home = () => {
  return (
    <div className="home-page">
      <div>
        <HomeBanners />
        <AboutUs />
        <SectionBG>
          <Service />
          <CaseStudy />
          <ClientsSay />
        </SectionBG>
        <Partner />
        <CareerNews />
        <FlowOfUs />
        <DownloadUs />
      </div>
    </div>
  );
};

Home.displayName = "Home";
