import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { Capabilities } from "@/components/Capabilities";
import { Technology } from "@/components/Technology";
import { Comparison } from "@/components/Comparison";
import { UseCases } from "@/components/UseCases";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Vinsta Compute — orbital edge compute for constellation operators. Process and infer at the source.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        label="Products"
        title="Vinsta Compute"
        description="Orbital edge compute for your constellation. Process, store, and infer at the source — without the ground bottleneck."
      />
      <Process />
      <Capabilities />
      <Technology />
      <Comparison />
      <UseCases />
      <FAQ />
      <CTA
        title="Ready to deploy Vinsta Compute?"
        description="Tell us about your constellation and processing needs. We'll schedule a technical walkthrough."
      />
    </main>
  );
}
