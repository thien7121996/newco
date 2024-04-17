import { Metadata } from "next";
import { AboutUs } from "@/components/pages/AboutUs";
import { TopBarPage } from "@/components/ui/TopBarPage";

export const metadata: Metadata = {
  title: "About us - Corize",
  description: "Corize Career And News",
};

export default async function AboutUsPage() {
  return (
    <>
      <TopBarPage headingPage="About Us" />
      <AboutUs />
    </>
  );
}
