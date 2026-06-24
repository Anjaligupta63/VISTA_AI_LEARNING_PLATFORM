import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import Stats from "@/components/common/Stats";
import Features from "@/components/common/Features";
import DashboardPreview from "@/components/common/DashboardPreview";
import HowItWorks from "@/components/common/HowItWorks";
import Testimonials from "@/components/common/Testimonials";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <DashboardPreview />

      <HowItWorks />

      <Testimonials />

      <Footer />

    </main>
  );
}