import {
  ReviewClientsList,
  ListReviewClientsSection,
  ListReviewClientsWrapper,
  HeadingSection,
} from "./styles";
import { ItemReview } from "@/components/ui/ClientsSay/ListReviews/ItemReview/";

export const ListReviewClients = () => {
  return (
    <ListReviewClientsWrapper>
      <ListReviewClientsSection>
        <HeadingSection>Feedback of clients</HeadingSection>
        <ReviewClientsList>
          <ItemReview />
          <ItemReview />
          <ItemReview />
          <ItemReview />
        </ReviewClientsList>
      </ListReviewClientsSection>
    </ListReviewClientsWrapper>
  );
};

ListReviewClients.displayName = "ListReviewClients";
