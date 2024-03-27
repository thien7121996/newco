import { ListReviews } from "./ListReviews/ListReviews";
import { MoreGallery } from "./MoreGallery";
import {
  ClientsSayBlockLeft,
  ClientsSayBlockRight,
  ClientsSayHeading,
  ClientsSaysSection,
  ClientsSaysWrapper,
} from "./styles";
import { BlockSwiper } from "@/components/ui/BlockSwiper";

export const ClientsSay = () => {
  return (
    <ClientsSaysWrapper>
      <ClientsSaysSection>
        <ClientsSayBlockLeft>
          <ClientsSayHeading>
            WHAT’S OUR
            <br />
            CLIENTS -------- SAY
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
