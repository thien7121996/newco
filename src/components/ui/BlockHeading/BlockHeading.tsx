import { FC } from "react";
import {
  BlockHeadingButton,
  BlockHeadingContent,
  BlockHeadingDescription,
  BlockHeadingSubTitle,
  BlockHeadingTitle,
} from "./styles";

type Props = {
  subTitle: string;
  title: string;
  content: string;
  textButton?: string;
  subContent?: string;
  align?: "center" | "left" | "right";
};
export const BlockHeading: FC<Props> = ({
  subTitle,
  title,
  content,
  textButton,
  subContent,
  align,
}) => {
  return (
    <BlockHeadingContent align={align}>
      <BlockHeadingSubTitle>{subTitle}</BlockHeadingSubTitle>
      <BlockHeadingTitle dangerouslySetInnerHTML={{ __html: title }} />
      <BlockHeadingDescription dangerouslySetInnerHTML={{ __html: content }} />
      {textButton && (
        <BlockHeadingButton className="over">{textButton}</BlockHeadingButton>
      )}
      {subContent && (
        <BlockHeadingDescription
          dangerouslySetInnerHTML={{ __html: subContent }}
        />
      )}
    </BlockHeadingContent>
  );
};

BlockHeading.displayName = "BlockHeading";
