import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Simulator from "@/components/Simulator";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Simulator />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  );
}