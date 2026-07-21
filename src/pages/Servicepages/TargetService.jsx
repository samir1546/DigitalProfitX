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
    glow: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
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
    glow: "radial-gradient(circle at 50% 0%, rgba(13,148,136,0.12) 0%, transparent 70%)",
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
    glow: "radial-gradient(circle at 50% 0%, rgba(225,29,72,0.12) 0%, transparent 70%)",
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
    glow: "radial-gradient(circle at 50% 0%, rgba(147,51,234,0.12) 0%, transparent 70%)",
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
      // 1. Header Scroll Scrub Animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 90%",
              end: "top 55%",
              scrub: 1,
            },
          },
        );
      }

      // 2. Pure Scroll Scrub Animation for Cards (1:1 Scroll Control)
      const cards = cardsRef.current.filter(Boolean);
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            scale: 0.93,
            opacity: 0.2,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
      <div className="absolute bottom-1/3 right-10 w-[600px] h-[600px] bg-gradient-to-br from-pink-100/25 via-purple-100/20 to-indigo-100/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
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

        {/* Dynamic Cards Deck synced with Scroll */}
        <div className="grid grid-cols-1 gap-10 lg:gap-14 max-w-5xl mx-auto">
          {specializedServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative w-full bg-white/75 backdrop-blur-2xl border border-white/90 rounded-[32px] p-8 sm:p-10 lg:p-11 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_70px_rgba(124,58,237,0.08)] transition-all duration-500 overflow-hidden hover:-translate-y-1.5"
              >
                {/* Radial Accent Glow on Hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  style={{ background: service.glow }}
                />

                {/* Subtle Watermark ID */}
                <span className="absolute -top-6 -right-2 text-[120px] sm:text-[150px] font-bold font-['Playfair_Display',serif] text-black/[0.02] leading-none pointer-events-none select-none group-hover:text-black/[0.04] transition-colors duration-500">
                  {service.id}
                </span>

                <div className="relative z-10">
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
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
                        className="text-[10px] font-semibold tracking-[0.16em] uppercase px-4 py-1.5 rounded-full border border-black/[0.04] bg-white/80 shadow-xs"
                        style={{ color: service.accent }}
                      >
                        {service.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gray-100/80 text-gray-400 flex items-center justify-center group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300">
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
