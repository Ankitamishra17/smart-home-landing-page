import Hero from "../components/Hero";
import Features from "../components/Features";
import Highlights from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
     <Navbar/>
      <Hero />
      <Features />
      <Highlights />
      <Pricing />
      <Footer />
    </>
  );
}
