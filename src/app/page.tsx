import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BusinessImpact from "../components/BusinessImpact";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <Hero />

      <BusinessImpact />
    </main>
  );
}