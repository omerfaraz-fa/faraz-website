import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BusinessImpact from "../components/BusinessImpact";
import About from "../components/About";
import Contact from "../components/Contact";
import FeaturedProjects from "../components/FeaturedProjects";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <Hero />

      <BusinessImpact />
      
      <About />

      <FeaturedProjects />

      <Contact />
      <Footer />
    </main>
  );
}