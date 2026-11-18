import { Header } from "../widgets/Header";
import { Hero } from "../widgets/Hero";
import { Benefits } from "../widgets/Benefits";
import { Pricing } from "../widgets/Pricing";
import { Footer } from "../widgets/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
