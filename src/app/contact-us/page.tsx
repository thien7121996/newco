import { Metadata } from "next";
import { ContactUs } from "@/components/pages/ContactUs";
import { TopBarPage } from "@/components/ui/TopBarPage";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Corize Contact us",
};

export default async function OurClientPage() {
  return (
    <>
      <TopBarPage headingPage="Contact us" />
      <ContactUs />
    </>
  );
}
