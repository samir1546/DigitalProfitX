import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdStar } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const row1Reviews = [
  {
    name: "Alexander Wright",
    role: "CEO, NexaCorp",
    text: "The growth engine completely shifted our scaling paradigm. Their system optimizes conversions in real-time with precision.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom Digital",
    text: "Our conversion rates increased by 40% in just 2 months with their optimized funnel system.",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Director, Vertex India",
    text: "Cinematic design + high-performance architecture that feels truly premium.",
    rating: 5,
  },
  {
    name: "Clara Mendoza",
    role: "Marketing VP, Solis Tech",
    text: "They build complete digital ecosystems, not just websites or code.",
    rating: 5,
  },
];

const row2Reviews = [
  {
    name: "David Kim",
    role: "Product Head, K-Drive",
    text: "Predictive ad systems that focus purely on ROI growth.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "E-com Director, Mode",
    text: "Flawless performance, smooth UI, and scalable architecture.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    role: "COO, Aura Luxury",
    text: "Turned our store into a high-converting global brand.",
    rating: 5,
  },
  {
    name: "Marcus Vance",
    role: "Founder, Synth Media",
    text: "Elite-level SEO + UX + performance strategy.",
    rating: 5,
  },
];

const ClientReviews = () => {
  const containerRef = useRef(null);
  const topTrackRef = useRef(null);
  const bottomTrackRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerChildren = headerRef.current.children;

    gsap.fromTo(
      headerChildren,
      {
        opacity: 0,
        y: 45, 
        skewY: 1.5,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        filter: "blur(0px)",
        duration: 1, 
        stagger: 0.15, 
        ease: "power3.out", 
        scrollTrigger: {
          trigger: containerRef.current, 
          start: "top 88%", 
          toggleActions: "play none none reverse",
        },
      },
    );

    
    let mm = gsap.matchMedia();
    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        let { isMobile } = context.conditions;
        let durationSpeed = isMobile ? 15 : 28;

        gsap.to(topTrackRef.current, {
          xPercent: -50,
          ease: "none",
          duration: durationSpeed,
          repeat: -1,
        });

        gsap.set(bottomTrackRef.current, { xPercent: -50 });
        gsap.to(bottomTrackRef.current, {
          xPercent: 0,
          ease: "none",
          duration: durationSpeed,
          repeat: -1,
        });
      },
    );

    return () => mm.revert();
  }, []);

  const ReviewCard = ({ review }) => (
    <div className="w-[250px] md:w-[360px] h-[150px] md:h-[180px] flex-shrink-0 backdrop-blur-md border border-slate-200/60 p-4 md:p-5 rounded-2xl shadow-sm flex flex-col justify-between mx-2 md:mx-3 hover:scale-[1.02] transition-transform duration-500 bg-white/60">
      <div className="flex gap-1 text-amber-400 text-xs md:text-sm">
        {[...Array(review.rating)].map((_, i) => (
          <IoMdStar key={i} />
        ))}
      </div>

      <p className="text-[11px] md:text-sm text-slate-600 leading-relaxed line-clamp-3 md:line-clamp-none">
        {review.text}
      </p>

      <div className="w-full h-[1px] bg-slate-200 rounded-full my-1 md:my-0"></div>

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] md:text-xs font-bold">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-[11px] md:text-sm font-semibold text-slate-900 leading-none">
            {review.name}
          </h4>
          <p className="text-[9px] md:text-[11px] text-slate-400 mt-0.5 md:mt-1">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-16 md:py-24 overflow-hidden bg-transparent"
    >
      <div
        ref={headerRef}
        className="text-center mb-12 md:mb-24 relative px-4 will-change-transform"
      >
        <div className="absolute inset-0 flex justify-center">
          <div className="w-[180px] md:w-[280px] h-[180px] md:h-[280px] bg-blue-500/10 blur-3xl rounded-full"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[10px] md:text-xs font-semibold tracking-wider mb-4 md:mb-6 shadow-sm">
          ✦ Trusted Performance Network
        </div>

        <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
          Trusted by{" "}
          <span className="font-extrabold font-[myfont] text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-500">
            Global Leaders
          </span>
        </h2>

        <div className="w-16 md:w-24 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-3 md:mt-4 rounded-full"></div>

        <p className="text-slate-500 mt-4 md:mt-6 max-w-2xl mx-auto text-[13px] md:text-base leading-relaxed px-2">
          Real feedback from brands who scaled using our performance-driven
          systems.
          <br className="hidden md:block" />
          We focus on conversion, automation, and measurable business growth —
          not vanity metrics.
        </p>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden">
          <div ref={topTrackRef} className="flex">
            {[...row1Reviews, ...row1Reviews].map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden mt-3 md:mt-6">
          <div ref={bottomTrackRef} className="flex">
            {[...row2Reviews, ...row2Reviews].map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
