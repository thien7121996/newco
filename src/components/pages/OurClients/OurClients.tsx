import { OurClientsSection, OurClientsWraper } from "./styles";
import { ListCaseStudy } from "@/components/ui/ListCaseStudy";
import { ListReviewClients } from "@/components/ui/ListReviewClients/LisReviewClients";

export const OurClients = ({}) => {
  return (
    <div className="ourclients-page">
      <OurClientsWraper>
        <OurClientsSection>
          <ListCaseStudy />
          <ListReviewClients />
        </OurClientsSection>
      </OurClientsWraper>
    </div>
  );
};
