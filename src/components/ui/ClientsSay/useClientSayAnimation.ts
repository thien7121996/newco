import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { RefObject } from "react";

export const useClientSayAnimation = (
  clientSayRef: RefObject<HTMLDivElement>,
) => {
  const { contextSafe } = useGSAP({ scope: clientSayRef });

  const animate = contextSafe(() => {
    const scrollTrigger = {
      trigger: ".client-say-title-1",
      start: "top 105%-=200px",
      end: "+=500",
      scrub: true,
    };

    gsap.fromTo(
      [".client-say-title-1", ".client-say-title-2"],
      {
        position: "relative",
        left: 400,
        opacity: 0,
        duration: 0.25,
        stagger: {
          amount: 0.1,
        },
        ease: "ease-out",
        delay: 0.2,
        scrollTrigger,
      },
      {
        opacity: 1,
        left: 0,
        duration: 0.25,
        stagger: {
          amount: 0.1,
        },
        ease: "ease-out",
        scrollTrigger,
      },
    );
  });

  useGSAP(() => animate(), { scope: clientSayRef });
};
