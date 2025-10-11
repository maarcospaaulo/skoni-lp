import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Simulator from "@/components/Simulator";
import Benefits from "@/components/Benefits";
import TiposConsorcioSection from '@/components/Consorcios/TiposConsorcioSection';
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Simulator />
      <Benefits />
      <TiposConsorcioSection />
      <FAQ />
      <Footer />
    </main>
  );
}