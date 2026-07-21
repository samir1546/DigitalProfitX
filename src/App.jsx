import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { PremiumBackground } from "./Components/PremiumBackground";
import HomePage from "./Home";
import Footer from "./Components/Footer";
import CursorPointer from "./Components/CursorPointer";
import Lenis from "lenis";
import ServicePage from "./pages/Servicepages/ServicePage";
import ContactSection from "./pages/Contactpage/ContactSection";
import About from "./pages/AboutUs/About";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <CursorPointer />
      <div className="relative min-h-screen flex flex-col">
        <div className="fixed inset-0 -z-10">
          <PremiumBackground />
        </div>
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
