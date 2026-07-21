import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
  Layers,
  Cpu,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const bentoRef = useRef(null);
  const card3DRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Stagger & Blur Reveal
      if (heroTextRef.current) {
        gsap.fromTo(
          heroTextRef.current.children,
          { opacity: 0, y: 50, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heroTextRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // 2. Bento Cards Scroll Scale Effect
      if (bentoRef.current) {
        const cards = bentoRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bentoRef.current,
              start: "top 75%",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt Effect on Mouse Move for Hologram Card
  const handleMouseMove = (e) => {
    if (!card3DRef.current) return;
    const rect = card3DRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card3DRef.current, {
      rotateY: x * 0.035,
      rotateX: -y * 0.035,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!card3DRef.current) return;
    gsap.to(card3DRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-28 lg:py-40 bg-transparent text-gray-900 overflow-hidden antialiased font-['Inter',sans-serif] select-none"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Luxury Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-purple-200/35 via-indigo-100/25 to-blue-100/30 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-pink-100/30 via-purple-100/20 to-teal-100/25 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Subtle Light Mesh Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div
          ref={heroTextRef}
          className="max-w-4xl mx-auto text-center mb-20 lg:mb-28"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#7c3aed] animate-pulse" />
            <span className="font-['Space_Grotesk',sans-serif] text-xs font-semibold tracking-[0.22em] uppercase text-gray-600">
              Who We Are • DigitalProfitX
            </span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.06] text-[#0f0f0f] mb-2">
            Engineered For <br />
            <span className=" font-medium font-['Playfair_Display',serif] text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#2563eb]">
              Unfair Market Advantage.
            </span>
          </h1>

          <p className="text-gray-500 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            DigitalProfitX is not a traditional agency. We are a high-octane
            growth collective bridging high-level strategy, performance ad
            engineering, and seamless digital infrastructure.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          ref={bentoRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Card 1: 3D Interactive Main Glass Card (Col-7) */}
          <div
            ref={card3DRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d" }}
            className="lg:col-span-7  backdrop-blur-2xl border  rounded-[36px] p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_70px_rgba(124,58,237,0.12)] flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#7c3aed]/10 rounded-full blur-3xl group-hover:bg-[#7c3aed]/20 transition-all duration-700 pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] flex items-center justify-center mb-8 shadow-xs">
                <Cpu className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono tracking-widest text-[#7c3aed] uppercase block mb-3 font-semibold">
                [ 01 // CORE ARCHITECTURE ]
              </span>

              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-5 leading-snug">
                Data-Driven Media Buying & Scaling Ecosystem
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal mb-6">
                Hum simple campaigns chalaane par nahi, balki continuous{" "}
                <strong className="text-gray-900 font-semibold">
                  ROAS Flywheel
                </strong>{" "}
                create karne par focus karte hain. Marketplace dominance
                (Amazon/Flipkart), Meta Ads, Google Performance Max aur
                Conversion Rate Optimization (CRO) sab ek synchronised engine ki
                tarah kaam karte hain.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-gray-900">
                    ₹50M+
                  </h4>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                    Ad Spend Managed
                  </p>
                </div>
                <div className="h-8 w-[1px] bg-gray-200" />
                <div>
                  <h4 className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-gray-900">
                    4.8x
                  </h4>
                  <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                    Avg Blended ROAS
                  </p>
                </div>
              </div>

              <div className="w-10 h-10 rounded-full  text-gray-500 flex items-center justify-center group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 2: Right Top Stacked Card (Col-5) */}
          <div className="lg:col-span-5  backdrop-blur-2xl border  rounded-[30px] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_70px_rgba(124,58,237,0.1)] transition-all duration-500 flex flex-col justify-between hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2563eb]/10 border border-[#2563eb]/20 text-[#2563eb] flex items-center justify-center mb-6 shadow-xs">
                <Layers className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono tracking-widest text-[#2563eb] uppercase block mb-2 font-semibold">
                [ 02 // FULL FUNNEL DOMINANCE ]
              </span>

              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-bold text-gray-900 mb-4">
                360° Marketplace & Organic Growth
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Sirf paid ads nahi, hum aapke brand ki organic authority, A+
                Content, Listing Optimization aur SEO ko build karke customer
                acquisition cost (CAC) ko lowest level par laate hain.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "E-Commerce Scaling",
                "Performance Marketing",
                "Marketplace Optimization",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100 text-xs text-gray-700 font-medium"
                >
                  <ShieldCheck className="w-4 h-4 text-[#7c3aed]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Bottom Full Width / CTA Card (Col-12) */}
          <div className="lg:col-span-12  backdrop-blur-2xl border border-black rounded-[36px] p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-8 hover:shadow-[0_25px_70px_rgba(124,58,237,0.12)] transition-all duration-500">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[11px] font-mono tracking-widest text-[#7c3aed] uppercase block mb-2 font-semibold">
                [ 03 // OUR COMMITMENT ]
              </span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Ready To Outpace Your Competition?
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed">
                Jab aap DigitalProfitX ke saath associate hote hain, aapko milta
                hai direct CMO-level execution, zero fluffy reports, aur
                hyper-focused revenue scaling.
              </p>
            </div>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_30px_rgba(124,58,237,0.25)] hover:shadow-[0_15px_40px_rgba(124,58,237,0.4)] hover:scale-105 transition-all duration-300 shrink-0"
            >
              Scale Your Brand Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
