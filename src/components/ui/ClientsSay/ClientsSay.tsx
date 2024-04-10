import { useRef } from "react";
import { ListReviews } from "./ListReviews/ListReviews";
import { MoreGallery } from "./MoreGallery";
import {
  ClientsSayBlockLeft,
  ClientsSayBlockRight,
  ClientsSayHeading,
  ClientsSaysSection,
  ClientsSaysWrapper,
} from "./styles";
import { useClientSayAnimation } from "./useClientSayAnimation";
import { BlockSwiper } from "@/components/ui/BlockSwiper";

export const ClientsSay = () => {
  const clientSayRef = useRef<HTMLDivElement>(null);
  useClientSayAnimation(clientSayRef);

  return (
    <ClientsSaysWrapper ref={clientSayRef}>
      <ClientsSaysSection>
        <ClientsSayBlockLeft>
          <ClientsSayHeading>
            <span className="client-say-title-1">WHAT’S OUR</span>
            <br />
            <span className="client-say-title-2">CLIENTS -------- SAY</span>
          </ClientsSayHeading>

          <ListReviews />
        </ClientsSayBlockLeft>
        <ClientsSayBlockRight>
          <BlockSwiper />
          <MoreGallery />
        </ClientsSayBlockRight>
      </ClientsSaysSection>
    </ClientsSaysWrapper>
  );
};
