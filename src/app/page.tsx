import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Value } from "@/components/Value";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Value />
      <FeaturedProduct />
      <Partners />
      <CTA />
    </main>
  );
}
