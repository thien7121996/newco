import Image from "next/image";
import { FC } from "react";
import {
  BlogContent,
  BlogDate,
  BlogDescription,
  BlogGap,
  BlogItemSection,
  BlogLabel,
  BlogTitle,
} from "./styles";
import ClockIcon from "@/styles/assets/clock.png";
type props = {
  label: string;
  title: string;
  description: string;
  date: string;
};

export const BlogItem: FC<props> = ({ label, title, description, date }) => {
  return (
    <BlogItemSection>
      <BlogContent>
        <BlogLabel>{label}</BlogLabel>
        <BlogTitle>{title}</BlogTitle>
        <BlogDescription>{description}</BlogDescription>
      </BlogContent>
      <BlogGap />
      <BlogDate>
        <Image src={ClockIcon.src} width={20} height={20} alt="" />
        <span>{date}</span>
      </BlogDate>
    </BlogItemSection>
  );
};
BlogItem.displayName = "BlogItem";
