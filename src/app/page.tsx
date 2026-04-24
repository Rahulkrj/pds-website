import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import CTABlock from "@/components/CTABlock";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import InstagramSection from "@/components/Instagram";
import Contact from "@/components/Contact";
import AreasWeServe from "@/components/AreasWeServe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallButton from "@/components/StickyCallButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <CTABlock
          heading="Ready to design your dream outfit?"
          subtext="Book a free consultation with our designer — instant reply on WhatsApp."
          dark={false}
        />
        <Portfolio />
        <CTABlock
          heading="Love what you see? Let's create yours."
          subtext="Our designer is available Mon–Sun, 10 AM – 10 PM. Limited slots this week."
          dark={true}
        />
        <Testimonials />
        <InstagramSection />
        <Contact />
        <AreasWeServe />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCallButton />
    </>
  );
}
