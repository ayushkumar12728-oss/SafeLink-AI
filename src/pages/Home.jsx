import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustedBy from "../components/home/TrustedBy";
import Background from "../components/Background";
import HowItWorks from "../components/home/HowItWorks";
import DashboardPreview from "../components/home/DashboardPreview";
import Features from "../components/home/Features";
import AIAnalyst from "../components/home/AIAnalyst";
import Statistics from "../components/home/Statistics";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <Background />

      <Navbar />

      <Hero />

      <TrustedBy />

        <HowItWorks />

        <DashboardPreview />

        <Features />

        <AIAnalyst />
    </main>
  );
}