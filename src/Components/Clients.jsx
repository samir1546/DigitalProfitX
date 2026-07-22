import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  MdStorefront,
  MdTrendingUp,
  MdCampaign,
  MdGroups,
  MdWorkspacePremium,
  MdAttachMoney,
} from "react-icons/md";

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
    badgeGlow: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
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
    badgeGlow: "bg-blue-500/10 text-blue-500 border-blue-500/20",
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
    badgeGlow: "bg-purple-500/10 text-purple-500 border-purple-500/20",
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
    badgeGlow: "bg-orange-500/10 text-orange-500 border-orange-500/20",
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
    badgeGlow: "bg-pink-500/10 text-pink-500 border-pink-500/20",
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
    badgeGlow: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    lineGlow: "group-hover:via-cyan-500/50",
  },
];

// Continuous Array Duplication for seamless loop
const marqueeStats = [...stats, ...stats];

const Clients = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Smooth Infinite Marquee Tween (Right-to-Left)
    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 25,
      repeat: -1,
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  // Hover Pause & Resume Handlers
  const handleMouseEnterTrack = () => {
    if (tweenRef.current) tweenRef.current.pause();
  };

  const handleMouseLeaveTrack = () => {
    if (tweenRef.current) tweenRef.current.play();
  };

  // Interactive 3D Tilt Effect Handlers
  const handleMouseMoveCard = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeaveCard = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-transparent overflow-hidden select-none">
      <div className="w-full">
        {/* Header Text */}
        <div className="text-center mb-12 lg:mb-16 px-6">
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

        {/* Marquee Track Wrapper */}
        <div
          className="relative w-full overflow-hidden py-6"
          onMouseEnter={handleMouseEnterTrack}
          onMouseLeave={handleMouseLeaveTrack}
        >
          {/* Sliding Track */}
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-8 w-max will-change-transform"
          >
            {marqueeStats.map((stat, index) => (
              <div
                key={index}
                onMouseMove={handleMouseMoveCard}
                onMouseLeave={handleMouseLeaveCard}
                className={`stat-card w-[320px] sm:w-[380px] h-[250px] sm:h-[270px] shrink-0 backdrop-blur-xl border-2 border-dotted border-slate-800/60 rounded-tr-[0px] rounded-bl-[30px] p-7 sm:p-9 flex flex-col justify-between transition-shadow duration-500 hover:scale-[1.03] cursor-pointer group relative overflow-hidden ${stat.border} ${stat.hoverShadow}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Radial Glow Overlay */}
                <div
                  className={`absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-[120px] opacity-10 group-hover:opacity-40 transition-all duration-700 pointer-events-none ${stat.glow}`}
                />

                {/* Top Row Icon & Badge */}
                <div className="flex justify-between items-start relative z-10">
                  <div
                    className={`w-13 h-13 sm:w-15 sm:h-15 rounded-tr-[10px] rounded-bl-[10px] flex items-center justify-center text-2xl sm:text-3xl border shadow-inner transition-transform duration-500 group-hover:scale-105 p-3 ${stat.bg} ${stat.color}`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-bold px-3 sm:px-4 py-1.5 rounded-full border border-slate-800/40 shadow-sm transition-all duration-500 ${stat.badgeGlow}`}
                  >
                    Growth Metric
                  </div>
                </div>

                {/* Metric Value & Label */}
                <div className="relative z-10">
                  <h3 className="text-4xl sm:text-5xl font-[myfont] font-medium tracking-tighter mb-1.5 text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-semibold tracking-widest text-slate-600 uppercase">
                    {stat.title}
                  </p>
                </div>

                {/* Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent transition-all duration-500 ${stat.lineGlow}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
