import CategoriesSection from "./components/CategoriesSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import Navbar from "./components/NavbarSection";
import { ReactLenis, useLenis } from "lenis/react";

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <>
      <ReactLenis root>
        <Navbar />
        <HeroSection />
        <div className="max-w-7xl mx-10 md:mx-40">
          <CategoriesSection />
          <MarqueeSection />
          <ContactSection />
          <FooterSection />
        </div>
      </ReactLenis>
    </>
  );
};

export default App;
