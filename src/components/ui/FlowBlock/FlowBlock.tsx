import { FC } from "react";
import {
  FlowBlockContent,
  FlowBlockSection,
  FlowBlockTitle,
  FlowBlockWrapper,
  FlowContent,
  FlowNumber,
  FlowNumberText,
} from "./styles";

type Props = {
  number: string;
  title: string;
  content: string;
};

export const FlowBlock: FC<Props> = ({ number, title, content }) => {
  return (
    <FlowBlockWrapper>
      <FlowBlockSection>
        <FlowNumber>
          <FlowNumberText>{number}</FlowNumberText>
        </FlowNumber>
        <FlowContent>
          <FlowBlockTitle>{title}</FlowBlockTitle>
          <FlowBlockContent>{content}</FlowBlockContent>
        </FlowContent>
      </FlowBlockSection>
    </FlowBlockWrapper>
  );
};

FlowBlock.displayName = "FlowBlock";
