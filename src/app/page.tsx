import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Expertise />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
