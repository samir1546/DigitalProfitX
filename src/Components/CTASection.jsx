import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const underlineRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
        },
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 45, skewY: 1.5, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.45",
        )
        .fromTo(
          underlineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 25, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, scale: 0.92, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.2)" },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-20 lg:py-32 px-6 relative overflow-hidden bg-transparent select-none"
    >
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center will-change-transform">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider mb-6 shadow-sm"
        >
          🚀 Let’s Build Growth
        </div>

        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-light text-slate-900 leading-tight tracking-tight"
        >
          Ready to grow your{" "}
          <span className="font-extrabold font-[myfont] text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500">
            BUSINESS?
          </span>
        </h2>

        <div
          ref={underlineRef}
          className="w-[112px] h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full origin-center"
        ></div>

        <p
          ref={descRef}
          className="mt-6 text-slate-500 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto tracking-wide"
        >
          Let’s discuss how our digital marketing expertise can help you achieve
          your ambitious business goals. We focus on real growth, real leads,
          and real revenue.
        </p>

        <div ref={btnRef} className="mt-10">
          <NavLink
            to="/services"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-slate-900 px-14 py-4 text-[15px] font-semibold text-black transition-all cursor-pointer shadow-lg hover:shadow-xl duration-300"
            style={{
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.04), 0 1.5px 4px rgba(0,0,0,0.02)",
            }}
          >
            <span className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-r from-blue-950 via-blue-700 to-indigo-500 transition-all duration-500 ease-in-out group-hover:h-full"></span>

            <span className="relative z-10 transition-colors duration-300 group-hover:text-white tracking-wide">
              Get Started
            </span>

            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
              →
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
