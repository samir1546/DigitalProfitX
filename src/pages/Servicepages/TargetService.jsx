import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  FiShoppingCart,
  FiSearch,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import PricingSection from "./PricingSection";

gsap.registerPlugin(ScrollTrigger);

const specializedServices = [
  {
    id: "01",
    title: "E-commerce Management",
    icon: FiShoppingCart,
    tag: "Storefront Growth",
    accent: "#7c3aed",
    glow: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124,58,237,0.15), transparent 80%)",
    iconBg: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    mainDescription:
      "Complete end-to-end management of your online stores across major platforms including Amazon, Flipkart, and Meesho with maximum operational speed.",
    bulletPoints: [
      "Product listing optimization with SEO-friendly titles & descriptions",
      "Inventory management & automated stock monitoring",
      "Order processing & fulfillment health coordination",
      "Customer service & proactive review management",
      "Dynamic pricing strategy & competitor analysis",
      "Monthly channel performance reports & revenue insights",
    ],
  },
  {
    id: "02",
    title: "SEO Services",
    icon: FiSearch,
    tag: "Organic Dominance",
    accent: "#0d9488",
    glow: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(13,148,136,0.15), transparent 80%)",
    iconBg: "linear-gradient(135deg, #0d9488, #059669)",
    mainDescription:
      "Data-driven search engine optimization strategies to improve your organic visibility, domain authority, and drive qualified traffic to your website.",
    bulletPoints: [
      "Comprehensive website SEO audit & technical analysis",
      "Intent-based keyword research & content strategy",
      "On-page optimization & Core Web Vitals technical SEO",
      "High-authority link building & brand PR development",
      "Local SEO targeting for hyper-local dominance",
      "Monthly keyword ranking reports & analytics tracking",
    ],
  },
  {
    id: "03",
    title: "Paid Ads Management",
    icon: FiTarget,
    tag: "Performance Media",
    accent: "#e11d48",
    glow: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(225,29,72,0.15), transparent 80%)",
    iconBg: "linear-gradient(135deg, #e11d48, #ea580c)",
    mainDescription:
      "Expert campaign management across Facebook Ads, Google Ads, and YouTube Ads with a ruthless focus on maximizing your return on ad spend (ROAS).",
    bulletPoints: [
      "Targeted campaign strategy & custom audience profiling",
      "High-converting ad creative development & A/B testing",
      "Algorithmic budget optimization & bid management",
      "Server-side conversion tracking & pixel analytics setup",
      "Landing page optimization & post-click CRO recommendations",
      "Weekly performance monitoring & spend adjustments",
    ],
  },
  {
    id: "04",
    title: "Growth Packages",
    icon: FiTrendingUp,
    tag: "Full-Stack Scale",
    accent: "#9333ea",
    glow: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(147,51,234,0.15), transparent 80%)",
    iconBg: "linear-gradient(135deg, #9333ea, #2563eb)",
    mainDescription:
      "Integrated digital marketing packages that combine multiple specialized channels into one synchronized growth flywheel for fast market expansion.",
    bulletPoints: [
      "Unified multi-channel digital marketing roadmap",
      "Combined SEO rank building & paid advertising scaling",
      "Omnichannel marketplace & D2C store optimization",
      "Social media branding & community integration",
      "Senior dedicated account manager & CMO guidance",
      "Quarterly executive strategy reviews & planning",
    ],
  },
];

export default function TargetService() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          },
        );
      }

      // Smooth Entrance Reveal for each card as it enters viewport
      const cards = cardsRef.current.filter(Boolean);
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse 3D Tilt Effect
  const handleMouseMove = (e, card) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (card) => {
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 bg-transparent antialiased font-['Inter',sans-serif] select-none text-gray-900 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
      `}</style>

      {/* Ambient Luxury Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-200/30 via-indigo-100/20 to-teal-100/30 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7c3aed] animate-pulse" />
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-600">
              Tailored Execution
            </p>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.08] text-[#0f0f0f] -tracking-[0.03em] mb-4">
            Targeted Specialized{" "}
            <em className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#2563eb]">
              Services
            </em>
          </h2>

          <p className="text-[15px] sm:text-base leading-[1.8] text-gray-500 font-normal max-w-xl mx-auto">
            Need help with specific channels? Select from our specialized
            service modules designed to drive measurable growth.
          </p>
        </div>

        {/* Dynamic Cards Deck with pure Sticky Stacking (One Over Another) */}
        <div className="flex flex-col gap-12 lg:gap-16 max-w-5xl mx-auto pb-20">
          {specializedServices.map((service, index) => {
            const Icon = service.icon;

            // Offset top distance slightly for each card so they stack cleanly
            const topStickyOffset = 100 + index * 25;

            return (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, cardsRef.current[index])}
                onMouseLeave={() => handleMouseLeave(cardsRef.current[index])}
                style={{
                  position: "sticky",
                  top: `${topStickyOffset}px`,
                  zIndex: index + 1,
                }}
                className="group relative w-full bg-white/95 backdrop-blur-2xl border border-gray-200/90 rounded-[32px] p-8 sm:p-10 lg:p-11 shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.15)] transition-shadow duration-300 overflow-hidden cursor-pointer"
              >
                {/* Dynamic Mouse Spotlight Glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{ background: service.glow }}
                />

                {/* Top Border Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                  }}
                />

                {/* Background Watermark Number */}
                <span className="absolute -top-6 -right-2 text-[120px] sm:text-[150px] font-bold font-['Playfair_Display',serif] text-black/[0.02] leading-none pointer-events-none select-none group-hover:text-black/[0.05] transition-colors duration-500">
                  {service.id}
                </span>

                <div className="relative z-10">
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                        style={{ background: service.iconBg }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-light font-['Playfair_Display',serif] text-gray-900 tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-semibold tracking-[0.16em] uppercase px-4 py-1.5 rounded-full border border-black/[0.05] bg-white shadow-xs"
                        style={{ color: service.accent }}
                      >
                        {service.tag}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Main Description */}
                  <p className="text-[14.5px] sm:text-[15.5px] leading-[1.75] text-gray-600 font-normal mb-8 max-w-3xl">
                    {service.mainDescription}
                  </p>

                  {/* Bullet Points */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                      {service.bulletPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group/point"
                        >
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 shrink-0 transition-transform duration-300 group-hover/point:scale-110"
                            style={{ color: service.accent }}
                          />
                          <p className="text-xs sm:text-[13.5px] text-gray-700 font-medium leading-snug">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Integrated Pricing Section */}
      <div className="mt-20">
        <PricingSection />
      </div>
    </section>
  );
}
