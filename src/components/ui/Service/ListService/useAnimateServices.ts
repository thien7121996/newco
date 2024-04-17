import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { RefObject } from "react";

export const useAnimateServices = (
  servicesListRef: RefObject<HTMLDivElement>,
) => {
  const { contextSafe } = useGSAP({ scope: servicesListRef });

  const animateServices = contextSafe(() => {
    const scrollTrigger = {
      trigger: ".service-icon-section",
      start: "bottom 105%-=300px",
      end: "+=500",
    };

    const tl = gsap.timeline({ scrollTrigger });

    tl.fromTo(
      ".service-list-section",
      {
        overflow: "hidden",
        transformOrigin: "top right",
        height: 0,
        maxHeight: 0,
        duration: 0.45,
        stagger: {
          amount: 0.2,
        },
        ease: "ease-out",
      },
      {
        overflow: "visible",
        height: 224,
        maxHeight: 224,
        duration: 0.55,
        ease: "ease-in",
      },
    );

    tl.to(".service-icon-section", {
      height: 224,
      duration: 0.2,
      ease: "ease-in",
    });

    gsap.fromTo(
      ".service-icon",
      { skew: 30 },
      {
        transform: "scale(1)",
        skew: 0,
        duration: 0.2,
        stagger: {
          amount: 0.35,
        },
        ease: "ease-in",
        delay: 0.2,
        scrollTrigger,
      },
    );

    tl.timeScale(1.25);
  });

  useGSAP(() => animateServices(), { scope: servicesListRef });
};
