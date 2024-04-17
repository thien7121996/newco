import Image from "next/image";
import { useRef } from "react";
import {
  DownloadSection,
  DownloadWrapper,
  ButtonDownload,
  BackgroundWrapper,
} from "./styles";
import { useBloatTextAnimation } from "@/hooks/useBloatTextAnimation.hooks";
import BackgroundDownload from "@/styles/assets/bgdownload.png";
import ImportLogo from "@/styles/assets/import.png";

export const DownloadUs = () => {
  const scopeRef = useRef<HTMLDivElement>(null);
  const titleTargetRef = useRef<HTMLParagraphElement>(null);
  const sloganTargetRef = useRef<HTMLParagraphElement>(null);

  useBloatTextAnimation(scopeRef, titleTargetRef, {
    delay: 0,
    duration: 1,
    type: "lines",
  });

  useBloatTextAnimation(scopeRef, sloganTargetRef, {
    delay: 1,
    duration: 1,
    type: "lines",
  });

  return (
    <DownloadWrapper ref={scopeRef}>
      <BackgroundWrapper className="download-bg">
        <Image
          src={BackgroundDownload.src}
          width={BackgroundDownload.width}
          height={BackgroundDownload.height}
          unoptimized
          alt={"download-background"}
        />
      </BackgroundWrapper>
      <DownloadSection>
        <h3 ref={titleTargetRef} className="about-us_title">
          {"Let's Make it Happen Together!"}
        </h3>
        <p ref={sloganTargetRef}>
          Use our API to connect to your supply chain and start testirg with
          your partners immediately.
        </p>
        <ButtonDownload>
          <span>Download</span>
          <Image src={ImportLogo.src} width={24} height={24} alt="" />
        </ButtonDownload>
      </DownloadSection>
    </DownloadWrapper>
  );
};

DownloadUs.displayName = "DownloadUs";
