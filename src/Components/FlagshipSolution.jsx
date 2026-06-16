import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MdOutlineStorefront,
  MdTrendingUp,
  MdAdsClick,
  MdOutlineBarChart,
  MdArrowForward,
} from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    name: "E-Commerce Solutions",
    icon: <MdOutlineStorefront />,
    color: "text-emerald-600",
    bg: "bg-emerald-100/80",
    lineGradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "SEO Engine Growth",
    icon: <MdTrendingUp />,
    color: "text-purple-600",
    bg: "bg-purple-100/80",
    lineGradient: "from-purple-400 to-indigo-500",
  },
  {
    name: "Performance Paid Ads",
    icon: <MdAdsClick />,
    color: "text-blue-600",
    bg: "bg-blue-100/80",
    lineGradient: "from-blue-400 to-cyan-500",
  },
  {
    name: "Predictive Analytics",
    icon: <MdOutlineBarChart />,
    color: "text-orange-600",
    bg: "bg-orange-100/50",
    lineGradient: "from-orange-400 to-amber-500",
  },
];

const FlagshipSolution = () => {
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      
      
      gsap.fromTo(
        leftSideRef.current.children,
        {
          opacity: 0,
          y: 60, 
          filter: "blur(10px)", 
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.4,
          stagger: 0.25, 
          ease: "power4.out", 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%", 
            toggleActions: "play none none reverse",
          },
        },
      );

      
      gsap.fromTo(
        ".interactive-row",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
          },
        },
      );
    });

    mm.add("(max-width: 1023px)", () => {
      
      gsap.fromTo(
        leftSideRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  
  const handleMouseEnter = (e, item) => {
    const row = e.currentTarget;
    const text = row.querySelector(".row-text");
    const iconContainer = row.querySelector(".icon-box");
    const bgReveal = row.querySelector(".bg-reveal");
    const glowLine = row.querySelector(".glow-line");

    gsap.to(text, {
      x: 16,
      color: "#0f172a",
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(iconContainer, {
      scale: 1.12,
      rotate: 5,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(bgReveal, {
      opacity: 1,
      scaleY: 1,
      duration: 0.35,
      ease: "power2.out",
    });
    gsap.to(glowLine, { width: "100%", duration: 0.4, ease: "power2.out" });
  };

  const handleMouseLeave = (e) => {
    const row = e.currentTarget;
    const text = row.querySelector(".row-text");
    const iconContainer = row.querySelector(".icon-box");
    const bgReveal = row.querySelector(".bg-reveal");
    const glowLine = row.querySelector(".glow-line");

    gsap.to(text, {
      x: 0,
      color: "#475569",
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(iconContainer, {
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(bgReveal, {
      opacity: 0,
      scaleY: 0.8,
      duration: 0.35,
      ease: "power2.out",
    });
    gsap.to(glowLine, { width: "0%", duration: 0.4, ease: "power2.out" });
  };

  return (
    <section
      ref={containerRef}
      className="w-full py-16 lg:py-32 bg-transparent select-none overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-[107px] items-center">
          <div
            ref={leftSideRef}
            className="lg:col-span-5 space-y-6 lg:space-y-9"
          >
            <div className="space-y-4 lg:space-y-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200/80 bg-white text-[11px] font-bold uppercase tracking-[0.25em] text-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                Flagship Core Architecture
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-slate-900 leading-[1.15] lg:leading-[1.08]">
                360 Degree <br />
                <span className="font-[myfont] text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500 sm:whitespace-nowrap">
                  Digital Marketing
                </span>
              </h2>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-slate-600 font-normal leading-relaxed tracking-wide max-w-xl border-l-[3px] border-slate-900/10 pl-4 lg:pl-5">
              Complete digital transformation for your business — from
              e-commerce management to paid advertising, SEO, and growth
              strategies. One comprehensive solution for all your digital
              marketing needs.
            </p>

            <div className="pt-2 lg:pt-3">
              <button className="group relative inline-flex items-center gap-3.5 px-7 py-3.5 lg:px-9 lg:py-4.5 border-t-[2px] font-medium text-sm rounded-full transition-all duration-500 shadow-xl shadow-slate-950/20 overflow-hidden">
                <span className="absolute bottom-0 left-0 h-0 w-full text-transparent bg-gradient-to-r from-blue-950 via-blue-700 to-indigo-500  transition-all duration-700 ease-in-out group-hover:h-full"></span>

                <span className="relative z-10 flex items-center gap-2.5 tracking-wide ">
                  Explore Full Package
                  <MdArrowForward className="text-lg transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </button>
            </div>
          </div>

          <div
            ref={rightSideRef}
            className="lg:col-span-7 flex flex-col w-full relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl blur-3xl pointer-events-none"></div>

            {pillars.map((item, index) => (
              <div
                key={index}
                onMouseEnter={(e) => handleMouseEnter(e, item)}
                onMouseLeave={handleMouseLeave}
                className="interactive-row group w-full flex items-center justify-between py-5 lg:py-7 px-4 lg:px-6 border-b border-slate-100 relative cursor-pointer overflow-hidden origin-center"
              >
                <div
                  className={`bg-reveal absolute inset-0 opacity-0 scale-y-[0.8] origin-center -z-10 transition-all duration-300 rounded-[5px] ${item.bg}`}
                ></div>

                <div className="flex items-center gap-4 lg:gap-6 relative z-10">
                  <div
                    className={`icon-box w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center text-xl lg:text-2xl border border-slate-200/60 text-slate-700 shadow-sm transition-colors duration-300 ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <span className="row-text text-lg lg:text-xl font-medium tracking-tight text-slate-500">
                    {item.name}
                  </span>
                </div>

                <div className="relative z-10 flex items-center justify-center w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-slate-200 bg-white shadow-sm transition-transform duration-500 group-hover:rotate-45">
                  <MdArrowForward className="text-xs lg:text-sm text-slate-400 group-hover:text-slate-800 transition-colors" />
                </div>

                <div
                  className={`glow-line absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${item.lineGradient}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipSolution;
