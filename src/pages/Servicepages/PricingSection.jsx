import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 89,
    description:
      "Essential toolkit for small businesses looking to establish their initial digital footprint.",
    popular: false,
    badge: null,
    accent: "#6366f1",
    glow: "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 75%)",
    features: [
      "Single platform e-commerce management",
      "Basic SEO optimization",
      "Up to $500/month ad spend management",
      "Monthly performance reports",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-gray-900 text-white hover:bg-indigo-600",
  },
  {
    id: "professional",
    name: "Professional",
    priceMonthly: 249,
    description:
      "Accelerate your growth with multi-channel optimization and advanced strategies.",
    popular: false,
    badge: null,
    accent: "#0d9488",
    glow: "radial-gradient(circle at 50% 0%, rgba(13,148,136,0.12) 0%, transparent 75%)",
    features: [
      "Multi-platform e-commerce management",
      "Advanced SEO with content strategy",
      "Up to $2,000/month ad spend management",
      "Bi-weekly performance reports",
      "Priority email and phone support",
      "Quarterly strategy sessions",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-gray-900 text-white hover:bg-teal-600",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: 599,
    description:
      "Comprehensive multi-channel dominance for scaling brands with dedicated support.",
    popular: false,
    badge: null,
    accent: "#2563eb",
    glow: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 75%)",
    features: [
      "Full-service e-commerce management",
      "Comprehensive SEO and content marketing",
      "Unlimited ad spend management",
      "Weekly performance reports",
      "24/7 priority support",
      "Monthly strategy sessions",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-gray-900 text-white hover:bg-blue-600",
  },
  {
    id: "ultimate",
    name: "360° Ultimate",
    priceMonthly: 999,
    description:
      "Complete digital transformation with an elite dedicated growth unit managing all fronts.",
    popular: true,
    badge: "Most Popular",
    accent: "#7c3aed",
    glow: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.22) 0%, transparent 80%)",
    features: [
      "Complete Digital Presence Management",
      "All e-commerce platforms managed",
      "Omnichannel Paid Ads & SEO",
      "Custom Analytics & Daily Syncs",
      "Dedicated Growth Team",
      "Continuous Conversion Optimization",
      "White-label reporting options",
    ],
    buttonText: "Claim Ultimate Tier",
    buttonStyle:
      "bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02]",
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          },
        );
      }

      // 2. Cards Staggered Animation
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 85%",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 bg-transparent antialiased font-['Inter',sans-serif] overflow-hidden select-none"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
      `}</style>

      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-purple-200/20 via-indigo-200/20 to-blue-100/20 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#7c3aed] animate-pulse" />
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-600">
              Transparent Investment
            </p>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.1] text-[#0f0f0f] -tracking-[0.03em] mb-4">
            Choose Your{" "}
            <em className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#2563eb]">
              Growth Package
            </em>
          </h2>

          <p className="text-[15px] sm:text-base leading-[1.75] text-gray-500 font-normal max-w-xl mx-auto mb-8">
            Select the package that best fits your business goals, or opt for
            complete dominance with our 360° Ultimate tier.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                !isAnnual
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                isAnnual
                  ? "bg-[#7c3aed] text-white shadow-md shadow-purple-500/20"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch">
          {pricingTiers.map((tier, index) => {
            const calculatedPrice = isAnnual
              ? Math.round(tier.priceMonthly * 0.8)
              : tier.priceMonthly;

            return (
              <div
                key={tier.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative flex flex-col justify-between rounded-[28px] p-7 transition-all duration-500 overflow-hidden ${
                  tier.popular
                    ? "bg-white/95 border-2 border-[#7c3aed] shadow-[0_20px_50px_rgba(124,58,237,0.18)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.25)] lg:-translate-y-2"
                    : "bg-white/80 backdrop-blur-xl border border-gray-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] hover:-translate-y-1.5"
                }`}
              >
                {/* Popular Floating Badge */}
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-l from-[#7c3aed] to-[#a855f7] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-bl-2xl shadow-sm">
                      {tier.badge}
                    </div>
                  </div>
                )}

                {/* Radial Glow Effect */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{ background: tier.glow }}
                />

                <div>
                  {/* Card Header */}
                  <div className="mb-6">
                    <span
                      className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase px-3 py-1 rounded-full mb-3 border border-black/[0.04]"
                      style={{
                        background: `${tier.accent}12`,
                        color: tier.accent,
                      }}
                    >
                      {tier.name}
                    </span>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 my-2">
                      <span className="text-2xl font-semibold text-gray-900">
                        $
                      </span>
                      <span className="text-4xl sm:text-5xl font-light font-['Playfair_Display',serif] text-gray-900 tracking-tight">
                        {calculatedPrice}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        /month
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] leading-[1.6] text-gray-500 font-normal min-h-[40px] mt-2">
                      {tier.description}
                    </p>
                  </div>

                  <hr className="border-gray-100 my-6" />

                  {/* Feature Bullets */}
                  <div className="mb-8">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-4">
                      What's Included
                    </p>
                    <ul className="space-y-3">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <div
                            className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: tier.accent }}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-[13px] text-gray-700 font-normal leading-[1.5]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call To Action Button */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full font-semibold text-xs tracking-wide transition-all duration-300 ${tier.buttonStyle}`}
                  >
                    <span>{tier.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
