import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { Values } from "@/components/Values";
import { Roadmap } from "@/components/Roadmap";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "vinStelX is building orbital infrastructure for the data age. Learn about our mission, team, and roadmap.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About"
        title="Building the orbital edge"
        description="We're a space infrastructure company focused on bringing compute to where satellite data is born."
      />
      <About variant="page" />
      <Values />
      <Roadmap />
      <Partners />
      <CTA />
    </main>
  );
}
