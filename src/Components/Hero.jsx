import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef(null);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const trustedRef = useRef(null);
  const revenueRef = useRef(null);
  const clientsRef = useRef(null);
  const roasRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
      )
        .fromTo(
          line2Ref.current,
          { opacity: 0, y: 40, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 },
          "-=0.6",
        )
        .fromTo(
          line3Ref.current,
          { opacity: 0, y: 30, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
          "-=0.5",
        )

        .fromTo(
          paraRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, scale: 0.88 },
          { opacity: 1, scale: 1, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          trustedRef.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          revenueRef.current,
          { opacity: 0, x: 40, rotate: 6 },
          { opacity: 1, x: 0, rotate: 20, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          clientsRef.current,
          { opacity: 0, y: 40, rotate: -3 },
          { opacity: 1, y: 0, rotate: -12, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          roasRef.current,
          { opacity: 0, x: 40, rotate: 6 },
          { opacity: 1, x: 0, rotate: 8, duration: 0.7 },
          "-=0.4",
        );

      gsap.to(revenueRef.current, {
        y: -10,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });
      gsap.to(clientsRef.current, {
        y: 10,
        duration: 2.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      });
      gsap.to(roasRef.current, {
        y: -8,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });
      gsap.to(trustedRef.current, {
        y: -5,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative pt-20 pb-16 md:pt-28 md:pb-20 flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      <div className="text-center max-w-6xl px-4 md:px-6 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[myfont] leading-tight">
          <span ref={line1Ref} className="block md:inline mr-0 md:mr-6">
            Grow Your
          </span>

          <span
            ref={line2Ref}
            className="relative inline-block mt-3 md:mt-0 px-4 md:px-5 py-2 md:py-3 ml-0 md:ml-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500 text-3xl sm:text-5xl md:text-7xl border border-blue-500 bg-blue-500/10 rounded-md"
            style={{
              boxShadow:
                "0 0 0 1px rgba(59,130,246,0.15), 0 8px 32px rgba(59,130,246,0.18), 0 2px 8px rgba(59,130,246,0.12)",
            }}
          >
            <span className="absolute w-2 h-2 bg-blue-500 rounded-full -top-1 -left-1"></span>
            <span className="absolute w-2 h-2 bg-blue-500 rounded-full -top-1 -right-1"></span>
            <span className="absolute w-2 h-2 bg-blue-500 rounded-full -bottom-1 -left-1"></span>
            <span className="absolute w-2 h-2 bg-blue-500 rounded-full -bottom-1 -right-1"></span>
            Digital Presence
          </span>

          <br />

          <span
            ref={line3Ref}
            className="inline-block text-xl sm:text-3xl md:text-inherit"
          >
            With Proven Strategies
          </span>
        </h1>

        <p ref={paraRef} className="mt-4 text-gray-600 text-lg opacity-0">
          Expert e-commerce management, SEO, and paid advertising solutions that{" "}
          <br className="hidden md:block" />
          drive real results for your business.
        </p>

        <div ref={btnRef} className="mt-8 opacity-0">
          <NavLink
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-black px-10 md:px-16 py-3.5 text-[14px] md:text-[15px] font-semibold text-black transition-all"
            style={{
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.10), 0 1.5px 4px rgba(0,0,0,0.07)",
            }}
          >
            <span className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-r from-blue-950 via-blue-700 to-indigo-500 transition-all duration-700 ease-in-out group-hover:h-full"></span>

            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Get Started
            </span>

            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
              →
            </span>
          </NavLink>
        </div>
      </div>

      <div className="absolute top-0 left-0 hidden md:block">
        <div
          ref={trustedRef}
          className="flex items-center justify-center mt-[107px] ml-40 gap-2 bg-white/70 rounded-xl px-3 py-1 opacity-0"
          style={{
            boxShadow:
              "0 4px 24px rgba(59,130,246,0.10), 0 1px 4px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.8)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
          <p className="text-[12px] text-gray-700">
            Trusted by 200+ scaling brands
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 hidden md:block">
        <div
          ref={revenueRef}
          className="flex flex-col items-center bg-white/70 px-3 py-2 mt-[120px] mr-60 border border-green-300 rounded-b-2xl rounded-l-2xl opacity-0 "
          style={{
            rotate: "20deg",
            boxShadow:
              "0 8px 32px rgba(34,197,94,0.18), 0 2px 8px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center justify-center gap-1">
            <span className="text-2xl">📈</span>
            <p className="text-black font-medium text-sm">Revenue</p>
          </div>
          <p className="text-green-700 font-bold text-lg">+280%</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 hidden md:block">
        <div
          ref={clientsRef}
          className="flex flex-col items-center bg-white/70 px-3 py-2 mb-[180px] ml-44 border border-blue-300 rounded-b-2xl rounded-r-2xl opacity-0"
          style={{
            rotate: "-12deg",
            boxShadow:
              "0 8px 32px rgba(59,130,246,0.16), 0 2px 8px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center justify-center gap-1">
            <span className="text-2xl">🏆</span>
            <p className="text-black font-medium text-sm">Active Clients</p>
          </div>
          <p className="text-blue-700 font-bold text-lg">200+</p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden md:block">
        <div
          ref={roasRef}
          className="flex flex-col items-center bg-white/70 px-3 py-2 mb-[160px] mr-44 border border-purple-400 rounded-b-2xl rounded-r-2xl opacity-0"
          style={{
            rotate: "8deg",
            boxShadow:
              "0 8px 32px rgba(168,85,247,0.16), 0 2px 8px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.9)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex items-center justify-center gap-1">
            <span className="text-2xl">⚡</span>
            <p className="text-black font-medium text-sm">Avg. ROAS</p>
          </div>
          <p className="text-purple-700 font-bold text-lg">4.8×</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
