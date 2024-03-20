import { FC } from "react";
import {
  FlowButton,
  FlowDescription,
  FlowOfUsContent,
  FlowOfUsNumberList,
  FlowOfUsSection,
  FlowOfUsWrapper,
  FlowSubTitle,
  FlowTitle,
} from "./styles";
import { FlowBlock } from "@/components/ui/FlowBlock";

export const FlowOfUs: FC = () => {
  return (
    <FlowOfUsWrapper>
      <FlowOfUsSection>
        <FlowOfUsNumberList>
          <FlowBlock
            number="01"
            title="Name flow"
            content="Make a difference: Join our charity campaign and help change lives!"
          />
          <FlowBlock
            number="02"
            title="Name flow"
            content="Make a difference: Join our charity campaign and help change lives!"
          />
          <FlowBlock
            number="03"
            title="Name flow"
            content="Make a difference: Join our charity campaign and help change lives!"
          />
          <FlowBlock
            number="04"
            title="Name flow"
            content="Make a difference: Join our charity campaign and help change lives!"
          />
        </FlowOfUsNumberList>
        <FlowOfUsContent>
          <FlowSubTitle>STATISTICS</FlowSubTitle>
          <FlowTitle>FLOW OF USE</FlowTitle>
          <FlowDescription>
            Your attention and consideration will lead the Republic of
            <br /> Korea It creates a space of shining intelligence.
          </FlowDescription>
          <FlowButton>Contact Form</FlowButton>
        </FlowOfUsContent>
      </FlowOfUsSection>
    </FlowOfUsWrapper>
  );
};

FlowOfUs.displayName = "FlowOfUs";
