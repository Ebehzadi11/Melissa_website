import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Differentiators } from "@/components/sections/Differentiators";
import { Portfolio } from "@/components/sections/Portfolio";
import { Videos } from "@/components/sections/Videos";
import { Niche } from "@/components/sections/Niche";
import { Clients } from "@/components/sections/Clients";
import { Measurements } from "@/components/sections/Measurements";
import { Performance } from "@/components/sections/Performance";
import { Philosophy } from "@/components/sections/Philosophy";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { MarqueeBand } from "@/components/sections/MarqueeBand";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Divider />
      <About />
      <Services />
      <Differentiators />
      <MarqueeBand />
      <Portfolio />
      <Videos />
      <Niche />
      <Divider />
      <Clients />
      <Measurements />
      <Performance />
      <Philosophy />
      <CTA />
      <Contact />
    </main>
  );
}
