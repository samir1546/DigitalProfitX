import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  MdStorefront,
  MdTrendingUp,
  MdCampaign,
  MdGroups,
  MdWorkspacePremium,
  MdAttachMoney,
} from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "500+",
    title: "Clients Partnered",
    icon: <MdGroups />,
    bg: "bg-emerald-500/10",
    glow: "bg-emerald-500/10",
    color: "text-emerald-600",
    border: "group-hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)]",
    badgeGlow: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    lineGlow: "group-hover:via-emerald-500/50",
  },
  {
    value: "₹50+ Cr",
    title: "Sales Generated",
    icon: <MdAttachMoney />,
    bg: "bg-blue-500/10",
    glow: "bg-blue-500/20",
    color: "text-blue-600",
    border: "group-hover:border-blue-500/50",
    hoverShadow: "hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]",
    badgeGlow: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    lineGlow: "group-hover:via-blue-500/50",
  },
  {
    value: "300%",
    title: "Average ROI Growth",
    icon: <MdTrendingUp />,
    bg: "bg-purple-500/10",
    glow: "bg-purple-500/20",
    color: "text-purple-600",
    border: "group-hover:border-purple-500/50",
    hoverShadow: "hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]",
    badgeGlow: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    lineGlow: "group-hover:via-purple-500/50",
  },
  {
    value: "1000+",
    title: "Successful Campaigns",
    icon: <MdCampaign />,
    bg: "bg-orange-500/10",
    glow: "bg-orange-500/20",
    color: "text-orange-600",
    border: "group-hover:border-orange-500/50",
    hoverShadow: "hover:shadow-[0_0_50px_-10px_rgba(249,115,22,0.3)]",
    badgeGlow: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    lineGlow: "group-hover:via-orange-500/50",
  },
  {
    value: "250%",
    title: "Conversion Rate Increase",
    icon: <MdStorefront />,
    bg: "bg-pink-500/10",
    glow: "bg-pink-500/20",
    color: "text-pink-600",
    border: "group-hover:border-pink-500/50",
    hoverShadow: "hover:shadow-[0_0_50px_-10px_rgba(236,72,153,0.3)]",
    badgeGlow: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    lineGlow: "group-hover:via-pink-500/50",
  },
  {
    value: "8+",
    title: "Years of Excellence",
    icon: <MdWorkspacePremium />,
    bg: "bg-cyan-500/10",
    glow: "bg-cyan-500/20",
    color: "text-cyan-600",
    border: "group-hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)]",
    badgeGlow: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    lineGlow: "group-hover:via-cyan-500/50",
  },
];

const Clients = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const textElements = textContainerRef.current.children;

    
    gsap.fromTo(
      textElements,
      {
        opacity: 0,
        y: 60, 
        skewY: 3, 
        transformOrigin: "left top",
        filter: "blur(15px)", 
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        filter: "blur(0px)",
        duration: 1.4, 
        stagger: 0.25, 
        ease: "power4.out", 
        scrollTrigger: {
          trigger: textContainerRef.current, 
          start: "top 82%", 
          toggleActions: "play none none reverse",
        },
      },
    );

    let mm = gsap.matchMedia();

    
    mm.add("(min-width: 1024px)", () => {
      const scrollTween = gsap.to(cards, {
        x: () => -(cards.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${cards.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      };
    });

    mm.add("(max-width: 1023px)", () => {
      const individualCards = cards.querySelectorAll(".stat-card");
      individualCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 lg:py-32 min-h-screen flex flex-col justify-center overflow-x-hidden select-none"
    >
      <div className="mx-auto w-full px-6 lg:px-16">
       
        <div
          ref={textContainerRef}
          className="text-center mb-16 lg:mb-28 will-change-transform"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-tight">
            Why{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500 font-[myfont]">
              Clients
            </span>{" "}
            Trust{" "}
            <span className="font-medium">
              DigitalProfit
              <span className="text-blue-600 font-[myfont] font-semibold">
                X
              </span>
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-sm md:text-lg font-light tracking-wide leading-relaxed text-slate-600">
            We don't just promise results; we deliver measurable growth that
            scales your business, helping brands dominate their market.
          </p>
        </div>

  
        <div
          ref={cardsRef}
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-8 w-full lg:w-max px-4 relative top-0 lg:-top-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card w-full sm:w-[400px] h-[260px] sm:h-[280px] shrink-0 backdrop-blur-xl border-2 border-dotted border-slate-800/60 rounded-tr-[0px] rounded-bl-[30px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-700 hover:scale-[1.01] cursor-pointer group relative overflow-hidden ${stat.border} ${stat.hoverShadow}`}
            >
              <div
                className={`absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[120px] opacity-10 group-hover:opacity-40 transition-all duration-700 pointer-events-none ${stat.glow}`}
              ></div>

              <div className="flex justify-between items-start relative z-10">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-tr-[10px] rounded-bl-[10px] flex items-center justify-center text-2xl sm:text-3xl border shadow-inner transition-all duration-500 group-hover:scale-110 ${stat.bg} ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <div
                  className={`text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-bold px-3 sm:px-4 py-1.5 rounded-full border border-slate-800/40 shadow-sm transition-all duration-500 group-hover:shadow-[inset_0_1px_10px_rgba(255,255,255,0.05)] ${stat.badgeGlow}`}
                >
                  Growth Metric
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-5xl sm:text-6xl font-[myfont] font-medium tracking-tighter mb-2">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm font-medium tracking-widest text-slate-700 uppercase">
                  {stat.title}
                </p>
              </div>
              <div
                className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent transition-all duration-500 ${stat.lineGlow}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
