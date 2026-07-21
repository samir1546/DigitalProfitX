import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MdStorefront } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { HiRocketLaunch } from "react-icons/hi2";

const services = [
  {
    id: "01",
    icon: MdStorefront,
    title: "E-commerce Management",
    description:
      "Complete store management for Amazon, Flipkart, and Meesho. We handle listings, inventory, and customer service to maximize your sales.",
    tag: "E-commerce",
    link: "https://digitalprofitx.com/services",
    glow: "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #c4b5fd, #818cf8)",
    accent: "#7c3aed",
    tagColor: "rgba(124,58,237,0.08)",
    tagText: "#7c3aed",
  },
  {
    id: "02",
    icon: TbSeo,
    title: "SEO Services",
    description:
      "Improve your search rankings and drive organic traffic with data-driven SEO strategies tailored to your business goals.",
    tag: "SEO",
    link: "https://digitalprofitx.com/services",
    glow: "radial-gradient(circle at 50% 0%, rgba(13,148,136,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #6ee7b7, #0d9488)",
    accent: "#0d9488",
    tagColor: "rgba(13,148,136,0.08)",
    tagText: "#0d9488",
  },
  {
    id: "03",
    icon: RiAdvertisementFill,
    title: "Paid Ads Management",
    description:
      "Expert management of Facebook Ads, Google Ads, and YouTube Ads campaigns with proven ROI optimization techniques.",
    tag: "Paid Ads",
    link: "https://digitalprofitx.com/services",
    glow: "radial-gradient(circle at 50% 0%, rgba(225,29,72,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #fda4af, #f97316)",
    accent: "#e11d48",
    tagColor: "rgba(225,29,72,0.08)",
    tagText: "#e11d48",
  },
  {
    id: "04",
    icon: HiRocketLaunch,
    title: "Growth Packages",
    description:
      "Comprehensive digital marketing packages designed to scale your business with integrated strategies across all channels.",
    tag: "Growth",
    link: "https://digitalprofitx.com/services",
    glow: "radial-gradient(circle at 50% 0%, rgba(147,51,234,0.18) 0%, transparent 75%)",
    iconBg: "linear-gradient(135deg, #f9a8d4, #a78bfa)",
    accent: "#9333ea",
    tagColor: "rgba(147,51,234,0.08)",
    tagText: "#9333ea",
  },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Subtle entry stagger animation on load
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-transparent antialiased font-['Inter',sans-serif] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
      `}</style>

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.06] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500">
              Core Digital Services
            </p>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.1] text-[#0f0f0f] -tracking-[0.02em] mb-6">
            Solutions that{" "}
            <em className="italic font-medium text-[#7c3aed]">grow</em> your
            business
          </h2>

          <p className="text-[15px] sm:text-base leading-[1.8] text-gray-500 font-normal max-w-xl mx-auto">
            Targeted digital marketing solutions designed to help your business
            thrive in specific online channels.
          </p>
        </div>

        {/* Premium Bento Grid Card Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative rounded-3xl transition-all duration-500 hover:translate-x-3 hover:translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-200/70"
              >
                {/* Dynamic Dotted Border on Top & Right using Card Accent Color */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-3xl border-t-[2.5px] border-r-[2.5px] border-dashed border-transparent transition-colors duration-500 z-20 opacity-0 group-hover:opacity-100"
                  style={{
                    borderTopColor: svc.accent,
                    borderRightColor: svc.accent,
                  }}
                />

                {/* Radial Glow Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{ background: svc.glow }}
                />

                {/* Background Number Accent */}
                <span className="absolute -top-6 -right-2 text-[150px] font-bold font-['Playfair_Display',serif] text-black/[0.02] leading-none pointer-events-none select-none -tracking-[0.05em] group-hover:text-black/[0.04] transition-colors duration-500">
                  {svc.id}
                </span>

                <div className="p-8 sm:p-10 relative z-10 ">
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-[50%] flex items-center justify-center shadow-sm p-3 transition-transform duration-500 group-hover:scale-105"
                      style={{ background: svc.iconBg }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <span
                      className="text-[11px] font-semibold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full border border-black/[0.04]"
                      style={{
                        background: svc.tagColor,
                        color: svc.tagText,
                      }}
                    >
                      {svc.tag}
                    </span>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-2xl sm:text-[26px] font-light font-['Playfair_Display',serif] text-gray-900 mb-3.5 tracking-tight group-hover:text-black transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-gray-500 font-normal mb-8">
                    {svc.description}
                  </p>
                </div>

                {/* Card Footer Divider & Link */}
                <div className="px-8 sm:px-10 pb-8 sm:pb-10 relative z-10">
                  <div className="h-px bg-gradient-to-r from-gray-200/80 via-gray-100 to-transparent mb-6" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400 tracking-wider">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: svc.accent }}
                      />
                      Service {svc.id} of 04
                    </div>

                    <a
                      href={svc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-current transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black"
                      style={{ color: svc.accent }}
                    >
                      <span>Learn more</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
