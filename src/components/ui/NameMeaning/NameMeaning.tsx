"use client";
import Image from "next/image";
import { BlockImage, NameMeaningWrapper } from "./styles";
import { BlockHeading } from "@/components/ui/BlockHeading";
import { RowPage } from "@/components/ui/RowPage";
import CorizeNameMeaning from "@/styles/assets/corize-about.png";
export const NameMeaning = () => {
  return (
    <RowPage>
      <NameMeaningWrapper>
        <BlockHeading
          title="Corize’s</br>
        name meaning"
          subTitle="EXPLAIN"
          content=""
          align="center"
        />
        <BlockImage>
          <Image
            src={CorizeNameMeaning.src}
            width={590}
            height={200}
            alt="Corize Name Meaning"
          />
        </BlockImage>
      </NameMeaningWrapper>
    </RowPage>
  );
};
NameMeaning.displayName = "NameMeaning";
