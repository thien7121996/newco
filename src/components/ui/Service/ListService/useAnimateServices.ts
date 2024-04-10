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
      start: "bottom 105%-=400px",
      end: "+=500",
    };

    const tl = gsap.timeline({ scrollTrigger });

    tl.fromTo(
      ".service-list-section",
      {
        skewY: 20,
        height: 0,
        maxHeight: 0,
        duration: 0.45,
        stagger: {
          amount: 0.2,
        },
        ease: "ease-out",
      },
      {
        skewY: 0,
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

    gsap.to(".service-icon", {
      transform: "scale(1)",
      duration: 0.25,
      stagger: {
        amount: 0.3,
      },
      ease: "ease-in",
      delay: 0.2,
      scrollTrigger,
    });

    tl.timeScale(1.25);
  });

  useGSAP(() => animateServices(), { scope: servicesListRef });
};
