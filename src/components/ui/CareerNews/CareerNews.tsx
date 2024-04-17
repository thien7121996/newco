"use client";
import Image from "next/image";
import Link from "next/link";
import {
  CareerNewsHeading,
  CareerNewsLearnMore,
  CareerNewsListBlog,
  CareerNewsSection,
  CareerNewsWrapper,
} from "./styles";
import { BlogItem } from "@/components/ui/BlogItem";
import ArrowIcon from "@/styles/assets/arrow-right-black.png";

export const CareerNews = () => {
  return (
    <CareerNewsWrapper>
      <CareerNewsSection>
        <CareerNewsHeading>CAREER AND NEWS</CareerNewsHeading>
        <CareerNewsListBlog>
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
        </CareerNewsListBlog>
        <CareerNewsLearnMore className="over">
          <Link href="/">
            Learn More
            <Image src={ArrowIcon.src} alt="" width={20} height={20} />
          </Link>
        </CareerNewsLearnMore>
      </CareerNewsSection>
    </CareerNewsWrapper>
  );
};

CareerNews.displayName = "CareerNews";
