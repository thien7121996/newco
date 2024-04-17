"use client";
import { AboutUsWrapper, AboutUsSection } from "./styles";
import { CoreValues } from "@/components/ui/CoreValues";
import { Miltones } from "@/components/ui/Miltones";
import { NameMeaning } from "@/components/ui/NameMeaning";
import { TeamPhotos } from "@/components/ui/TeamPhotos";
import { WhoWeAre } from "@/components/ui/WhoWeAre";

export const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <AboutUsSection>
        <TeamPhotos />
        <NameMeaning />
        <WhoWeAre />
        <CoreValues />
        <Miltones />
      </AboutUsSection>
    </AboutUsWrapper>
  );
};
AboutUs.displayName = "AboutUs";
