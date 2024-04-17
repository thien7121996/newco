import { Metadata } from "next";
import { Home } from "@/components/pages/Home";

export const metadata: Metadata = {
  title: "Corize Home Page",
  description: "Corize Home Page",
};

export default async function HomePage() {
  return <Home />;
}
