import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { RefObject, useCallback } from "react";

export const useSmootherScroll = (scope: RefObject<HTMLDivElement>) => {
  const handleSmoother = useCallback(() => {
    ScrollSmoother.create({
      smooth: 0.5,
      normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      effects: true,
      smoothTouch: true,
      // speed: 3,
      //   preventDefault: true,
    });
  }, []);

  useGSAP(handleSmoother, { scope });
};
