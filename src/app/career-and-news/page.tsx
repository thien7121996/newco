import { Metadata } from "next";
import { CareerAndNews } from "@/components/pages/CareerAndNews";
import { TopBarPage } from "@/components/ui/TopBarPage";

export const metadata: Metadata = {
  title: "Career And News",
  description: "Corize Career And News",
};

export default async function CareerAndNewsPage() {
  return (
    <>
      <TopBarPage headingPage="Career and News" />
      <CareerAndNews />
    </>
  );
}
