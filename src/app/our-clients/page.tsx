import { Metadata } from "next";
import { OurClients } from "@/components/pages/OurClients";
import { Partner } from "@/components/ui/Partner";
import { TopBarPage } from "@/components/ui/TopBarPage";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Corize Our Clients",
};

export default async function OurClientPage() {
  return (
    <>
      <TopBarPage headingPage="Our Clients" />
      <OurClients />
      <Partner />
    </>
  );
}
