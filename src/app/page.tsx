import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Thematic from "@/components/Thematic";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import TeamAndPartners from "@/components/TeamAndPartners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Thematic />
      <Projects />
      <Blog />
      <TeamAndPartners />
      <Contact />
      <Footer />
    </main>
  );
}
