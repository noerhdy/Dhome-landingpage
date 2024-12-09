import CategoriesSection from "./components/CategoriesSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import Navbar from "./components/NavbarSection";
// import { ReactLenis, useLenis } from "lenis/react";

const App = () => {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });
  return (
    <>
      {/* <ReactLenis root> */}
      <div className="flex flex-col items-center min-h-screen bg-neutral-100 ">
        <main className="w-full max-w-screen-xl px-6">
          <Navbar />
          <HeroSection />
          <CategoriesSection />
          <MarqueeSection />
          <ContactSection />
          <FooterSection />
        </main>
      </div>
      {/* </ReactLenis> */}
    </>
  );
};

export default App;
