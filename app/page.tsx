import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-foreground">
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <main className="w-full">
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
