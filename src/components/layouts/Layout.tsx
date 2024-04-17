"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { SplitText } from "gsap-trial/dist/SplitText";
import { atom, useAtom } from "jotai";
import { debounce } from "lodash";
import React, { FC, PropsWithChildren, useCallback, useRef } from "react";
import { Footer } from "./footers";
import { Header } from "./headers";
import { LayoutWrapper, LayoutPageWrapper } from "./styles";
import { DownloadUs } from "@/components/ui/DownloadUs";
import { useSmootherScroll } from "@/hooks/useSmootherScroll.hooks";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/grid";
import "swiper/css/bundle";
import "@/styles/globals.css";

export const headerHeightInit = atom(70);

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, useGSAP);

type Props = {
  isMobile: boolean;
};

/** Layout components */
export const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  isMobile,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const [headerHeight, setHeaderHeight] = useAtom(headerHeightInit);

  useSmootherScroll(bodyRef);

  const handleSetHeaderHeight = useCallback(
    (height: number) => {
      debounce((height: number) => setHeaderHeight(height), 200)(height);
    },
    [setHeaderHeight],
  );

  const measureRef = (node: object) => {
    if (!(node instanceof HTMLDivElement)) {
      return;
    }

    handleSetHeaderHeight(node.clientHeight);
  };

  return (
    <div ref={bodyRef} id="smooth-wrapper">
      <LayoutWrapper>
        <Header isMobile={isMobile} ref={measureRef} />
        <LayoutPageWrapper
          id="smooth-content"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          {children}
          <DownloadUs />
          <Footer />
        </LayoutPageWrapper>
      </LayoutWrapper>
    </div>
  );
};

Layout.displayName = "Layout";
