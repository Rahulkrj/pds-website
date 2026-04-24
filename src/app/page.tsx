import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/Instagram";
import Contact from "@/components/Contact";
import AreasWeServe from "@/components/AreasWeServe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <InstagramSection />
        <Contact />
        <AreasWeServe />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
