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
};
export const BlockHeading: FC<Props> = ({
  subTitle,
  title,
  content,
  textButton,
}) => {
  return (
    <BlockHeadingContent>
      <BlockHeadingSubTitle>{subTitle}</BlockHeadingSubTitle>
      <BlockHeadingTitle dangerouslySetInnerHTML={{ __html: title }} />
      <BlockHeadingDescription dangerouslySetInnerHTML={{ __html: content }} />
      {textButton && <BlockHeadingButton>{textButton}</BlockHeadingButton>}
    </BlockHeadingContent>
  );
};

BlockHeading.displayName = "BlockHeading";
