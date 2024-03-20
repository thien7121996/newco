import Image from "next/image";
import Link from "next/link";
import {
  CarrerNewsHeading,
  CarrerNewsLearnMore,
  CarrerNewsListBlog,
  CarrerNewsSection,
  CarrerNewsWrapper,
} from "./styles";
import { BlogItem } from "@/components/ui/BlogItem";
import ArrowIcon from "@/styles/assets/arrow-right-black.png";
export const CarrerNews = () => {
  return (
    <CarrerNewsWrapper>
      <CarrerNewsSection>
        <CarrerNewsHeading>CARRER & NEW</CarrerNewsHeading>
        <CarrerNewsListBlog>
          <BlogItem
            title="プレスリリース"
            description="事業アイデアやプロダクト体験を短期間で試作・検証する「Quick*Proto」の提供を開始"
            date="2023-06-01"
            label="株式会社"
          />
          <BlogItem
            title="プレスリリース"
            description="事業アイデアやプロダクト体験を短期間で試作・検証する「Quick*Proto」の提供を開始"
            date="2023-06-01"
            label="株式会社"
          />
          <BlogItem
            title="プレスリリース"
            description="事業アイデアやプロダクト体験を短期間で試作・検証する「Quick*Proto」の提供を開始"
            date="2023-06-01"
            label="株式会社"
          />
          <BlogItem
            title="プレスリリース"
            description="事業アイデアやプロダクト体験を短期間で試作・検証する「Quick*Proto」の提供を開始"
            date="2023-06-01"
            label="株式会社"
          />
        </CarrerNewsListBlog>
        <CarrerNewsLearnMore>
          <Link href="/">
            Learn More{" "}
            <Image src={ArrowIcon.src} alt="" width={20} height={20} />
          </Link>
        </CarrerNewsLearnMore>
      </CarrerNewsSection>
    </CarrerNewsWrapper>
  );
};

CarrerNews.displayName = "CarrerNews";
