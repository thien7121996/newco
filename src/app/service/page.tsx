import { Metadata } from "next";
import { Service } from "@/components/pages/Service";

export const metadata: Metadata = {
  title: "Service - Corize",
  description: "Corize Service",
};

export default async function ServicePage() {
  return <Service />;
}
