/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { DownloadSection, DownloadWrapper, ButtonDownload } from "./styles";
import ImportLogo from "@/styles/assets/import.png";

export const DownloadUs = () => {
  return (
    <DownloadWrapper>
      <DownloadSection>
        <h3>Let's Make it Happen Together!</h3>
        <p>
          Use our API to connect to your supply chain and start testirg with
          your partners immediately.
        </p>
        <ButtonDownload>
          <span>Download</span>{" "}
          <Image src={ImportLogo.src} width={24} height={24} alt="" />
        </ButtonDownload>
      </DownloadSection>
    </DownloadWrapper>
  );
};
DownloadUs.displayName = "DownloadUs";
