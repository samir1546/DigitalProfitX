import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiGlobe,
  FiArrowRight,
  FiShoppingCart,
  FiSearch,
  FiTarget,
  FiLayout,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";
import TargetService from "./TargetService";

gsap.registerPlugin(ScrollTrigger);

const ecosystemFeatures = [
  {
    id: "02",
    icon: FiShoppingCart,
    title: "E-commerce Mastery",
    desc: "End-to-end management for Amazon, Flipkart, and Meesho storefronts with continuous ROI optimization.",
    accent: "#7c3aed",
    glow: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #c4b5fd, #818cf8)",
    tag: "Marketplaces",
  },
  {
    id: "03",
    icon: FiSearch,
    title: "Technical & Organic SEO",
    desc: "Deep technical audits, AI-driven content strategy, and persistent high-intent rank tracking.",
    accent: "#0d9488",
    glow: "radial-gradient(circle at 50% 0%, rgba(13,148,136,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #6ee7b7, #0d9488)",
    tag: "Search Engine",
  },
  {
    id: "04",
    icon: FiTarget,
    title: "Omnichannel Paid Ads",
    desc: "Unified performance marketing strategies across Google, Facebook, YouTube, and TikTok.",
    accent: "#e11d48",
    glow: "radial-gradient(circle at 50% 0%, rgba(225,29,72,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #fda4af, #f97316)",
    tag: "Performance",
  },
  {
    id: "05",
    icon: FiLayout,
    title: "Digital Presence",
    desc: "Cohesive digital identity and premium brand storytelling across all digital touchpoints.",
    accent: "#9333ea",
    glow: "radial-gradient(circle at 50% 0%, rgba(147,51,234,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #f9a8d4, #a78bfa)",
    tag: "Branding",
  },
  {
    id: "06",
    icon: FiBarChart2,
    title: "Growth Analytics",
    desc: "Unified executive dashboard integrating multi-channel revenue attribution data seamlessly.",
    accent: "#2563eb",
    glow: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #93c5fd, #3b82f6)",
    tag: "Data Insights",
  },
  {
    id: "07",
    icon: FiTrendingUp,
    title: "Conversion Optimization",
    desc: "Continuous automated A/B testing on landing pages, checkout flows, and high-value sales funnels.",
    accent: "#d97706",
    glow: "radial-gradient(circle at 50% 0%, rgba(217,119,6,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #fde047, #f59e0b)",
    tag: "CRO & Funnels",
  },
];

export default function ServicePage() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const flagshipCardRef = useRef(null);
  const triggerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal Animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          },
        );
      }

      // 2. Flagship Hero Card Entrance Animation
      if (flagshipCardRef.current) {
        gsap.fromTo(
          flagshipCardRef.current,
          { opacity: 0, y: 50, filter: "blur(12px)", scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: flagshipCardRef.current,
              start: "top 80%",
            },
          },
        );
      }

      // 3. Scroll-Driven Horizontal Track Animation (Right to Left on Scroll)
      if (trackRef.current && triggerRef.current) {
        const getScrollAmount = () => {
          return trackRef.current.scrollWidth - window.innerWidth + 120;
        };

        gsap.to(trackRef.current, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top+=12%",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1.2, // Ultra-smooth scroll response
            invalidateOnRefresh: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-transparent antialiased font-['Inter',sans-serif] overflow-hidden select-none"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
      `}</style>

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-300/20 via-indigo-200/20 to-teal-200/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* 1. Cinematic Centered Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#7c3aed] animate-pulse" />
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-600">
              Complete Digital Growth Engine
            </p>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.08] text-[#0f0f0f] -tracking-[0.03em] mb-5">
            Digital Growth{" "}
            <em className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#2563eb]">
              Solutions
            </em>
          </h2>

          <p className="text-[15px] sm:text-base leading-[1.8] text-gray-500 font-normal max-w-xl mx-auto">
            Tailored strategies and comprehensive packages designed to scale
            your brand in the modern digital landscape.
          </p>
        </div>

        {/* 2. Top Centered Flagship Card (Width ~60-65%) */}
        <div className="flex justify-center mb-16 lg:mb-20">
          <div
            ref={flagshipCardRef}
            className="group relative w-full lg:w-[65%] bg-white/70 backdrop-blur-2xl border border-gray-200/80 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(124,58,237,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Dynamic Dotted Border on Top & Right using Flagship Accent Color */}
            <div
              className="absolute inset-0 pointer-events-none rounded-[32px] border-t-[2.5px] border-r-[2.5px] border-dashed border-transparent transition-colors duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                borderTopColor: "#7c3aed",
                borderRightColor: "#7c3aed",
              }}
            />

            {/* Radial Accent Glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 75%)",
              }}
            />

            {/* Background Watermark ID */}
            <span className="absolute -top-8 -right-4 text-[160px] font-bold font-['Playfair_Display',serif] text-black/[0.03] leading-none pointer-events-none select-none -tracking-[0.05em] group-hover:text-[#7c3aed]/[0.08] transition-colors duration-500">
              01
            </span>

            <div className="relative z-10">
              {/* Top Badge & Globe Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-[50%] bg-gradient-to-br from-[#c4b5fd] via-[#818cf8] to-[#7c3aed] flex items-center justify-center text-white shadow-lg shadow-purple-500/20 p-3 transition-transform duration-500 group-hover:scale-110">
                  <FiGlobe className="w-7 h-7" />
                </div>

                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20 shadow-sm">
                  Flagship Solution
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[36px] font-light font-['Playfair_Display',serif] text-gray-900 mb-4 leading-[1.18] tracking-tight">
                360 Degree Digital Marketing
              </h3>

              <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-gray-600 font-normal mb-8">
                Our ultimate offering. We take complete ownership of your
                digital transformation, integrating every channel into one
                cohesive growth engine.
              </p>
            </div>

            {/* Bottom Inquire CTA Button */}
            <div className="pt-6 border-t border-gray-200/60 relative z-10 flex justify-center">
              <a
                href="#contact"
                className="group relative inline-flex items-center overflow-hidden rounded-full border border-gray-900 px-6 py-3 font-semibold text-sm text-gray-900 transition-all duration-500 shadow-md"
              >
                {/* Hover Background */}
                <span className="absolute inset-x-0 bottom-0 h-0 bg-[#7c3aed] transition-all duration-500 ease-in-out group-hover:h-full"></span>

                {/* Text */}
                <span className="relative z-10 tracking-wide transition-colors duration-300 group-hover:text-white">
                  Inquire About 360°
                </span>

                {/* Icon */}
                <div className="relative z-10 ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
                  <FiArrowRight className="h-4 w-4 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Pinned Scroll-Driven Horizontal Cards Container */}
      <div ref={triggerRef} className="w-full relative py-6">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-4 flex items-center justify-between">
          <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
            Ecosystem Capabilities
          </h4>
          <span className="text-xs font-medium text-gray-400">
            Scroll to Explore →
          </span>
        </div>

        {/* Horizontal Moving Track */}
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-8 px-6 md:px-12 w-max"
          >
            {ecosystemFeatures.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative w-[340px] sm:w-[400px] lg:w-[420px] shrink-0 bg-white/70 backdrop-blur-2xl border border-gray-200/80 rounded-[20px] p-7 sm:p-8 transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,0,0,0.07)] flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Dotted Border on Top & Right using Card Accent Color */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-[20px] border-t-[2.5px] border-r-[2.5px] border-dashed border-transparent transition-colors duration-500 z-20 opacity-0 group-hover:opacity-100"
                    style={{
                      borderTopColor: item.accent,
                      borderRightColor: item.accent,
                    }}
                  />

                  {/* Radial Glow Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ background: item.glow }}
                  />

                  {/* Background Watermark Number Accent */}
                  <span className="absolute -top-6 -right-2 text-[140px] font-bold font-['Playfair_Display',serif] text-black/[0.03] leading-none pointer-events-none select-none -tracking-[0.05em] group-hover:text-black/[0.05] transition-colors duration-500">
                    {item.id}
                  </span>

                  <div>
                    {/* Card Header Row */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center text-white shadow-md p-3 transition-transform duration-500 group-hover:scale-110"
                        style={{ background: item.iconBg }}
                      >
                        <ItemIcon className="w-6 h-6" />
                      </div>

                      <span
                        className="text-[11px] font-semibold tracking-[0.14em] uppercase px-3.5 py-1 rounded-full border border-black/[0.04]"
                        style={{
                          background: `${item.accent}12`,
                          color: item.accent,
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h5 className="text-2xl font-light font-['Playfair_Display',serif] text-gray-900 mb-3 tracking-tight group-hover:text-black transition-colors relative z-10">
                      {item.title}
                    </h5>

                    {/* Description */}
                    <p className="text-sm sm:text-[14.5px] leading-[1.75] text-gray-500 font-normal relative z-10 mb-8">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer Row */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between relative z-10">
                    <span className="text-xs font-medium text-gray-400 tracking-wider">
                      Module {item.id}
                    </span>
                    <span
                      className="text-xs font-semibold flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1.5"
                      style={{ color: item.accent }}
                    >
                      Explore Capabilities →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <TargetService />
      </div>
    </section>
  );
}
