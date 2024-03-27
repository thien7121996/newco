import Image from "next/image";
import {
  ItemReviewBlock,
  ItemReviewContent,
  ItemReviewHeader,
  ItemReviewName,
  ItemReviewPosition,
  ItemRviewInfo,
} from "./styles";
import AvatarImage from "@/styles/assets/avatar.png";
export const ItemReview = () => {
  return (
    <ItemReviewBlock>
      <ItemReviewHeader>
        <Image src={AvatarImage.src} alt="Avatar" width={48} height={48} />
        <ItemRviewInfo>
          <ItemReviewName>Andy Nguyễn</ItemReviewName>
          <ItemReviewPosition>Founder, Reddit</ItemReviewPosition>
        </ItemRviewInfo>
      </ItemReviewHeader>
      <ItemReviewContent>
        Darimanakah sumber informasi yang Bapak / Ibu dapatkan mengenai Webinar
        ini? *
      </ItemReviewContent>
    </ItemReviewBlock>
  );
};

ItemReview.displayName = "ItemReview";
