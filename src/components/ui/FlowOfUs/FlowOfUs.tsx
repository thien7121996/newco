import { FC } from "react";
import { FlowOfUsNumberList, FlowOfUsSection, FlowOfUsWrapper } from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
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
        <BlockHeading
          subTitle="STATISTICS"
          title="FLOW OF USE"
          content="
            Your attention and consideration will lead the Republic of
            <br /> Korea It creates a space of shining intelligence."
          textButton="Contact Form"
        />
      </FlowOfUsSection>
    </FlowOfUsWrapper>
  );
};

FlowOfUs.displayName = "FlowOfUs";
