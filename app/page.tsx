import Hero      from "../components/sections/Hero";
import Stats     from "../components/sections/Stats";
import Services  from "../components/sections/Services";
import About     from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Process   from "../components/sections/Process";
import Pricing   from "../components/sections/Pricing";
import Contact   from "../components/sections/Contact";
import CtaFinal  from "../components/sections/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Pricing />
      <Contact />
      <CtaFinal />
    </>
  );
}