import type { Metadata } from "next";

import {
  Hero,
  ExecutiveStats,
  ClientProgrammes,
  ExecutiveSummary,
  Capabilities,
  FeaturedProjects,
  CallToAction,
} from "@/components/recruiter";

export const metadata: Metadata = {
  title: "Omer Faraz | Enterprise Data Integration & Automation",
  description:
    "Executive profile of Omer Faraz, Business Analyst specializing in enterprise data integration, automation and scalable business solutions.",

  // Prevent search engines from indexing this page.
  // The page remains accessible via its direct URL or QR code.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function MeetPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Hero />

      <ExecutiveStats />

      <ClientProgrammes />

      <FeaturedProjects />

      <ExecutiveSummary />

      <Capabilities />

      <CallToAction />
    </main>
  );
}
