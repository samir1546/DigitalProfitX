import { useState, useEffect, useRef } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { gsap } from "gsap";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  
  
  const headerRef = useRef(null);

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      
      tl.fromTo(
        ".nav-container",
        { y: -60, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 }
      );

      
      tl.fromTo(
        ".nav-logo-anim",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.8" 
      );

      
      tl.fromTo(
        ".nav-link-anim",
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
        "-=0.6"
      );

      
      tl.fromTo(
        ".nav-btn-anim",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.4)" },
        "-=0.4"
      );

    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="fixed top-7 left-0 right-0 z-50 px-4">
      <nav
        className="nav-container opacity-0 mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 md:px-10 py-3 
        bg-white/10 backdrop-blur-md border border-white/20 shadow-lg will-change-transform"
      >
        <a
          href="#home"
          className="nav-logo-anim opacity-0 flex items-center gap-2.5 group select-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-950 shadow-[0_0_15px_rgba(23,37,84,0.3)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[360deg] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
            <Sparkles className="h-5 w-5 text-white transition-transform duration-500 group-hover:scale-110" />
          </div>

          <span className="text-lg font-bold text-black   tracking-tight transition-colors duration-300 group-hover:text-slate-800">
            DigitalProfit
            <span className="text-blue-900 inline-block transition-transform duration-500 group-hover:scale-125 group-hover:translate-x-0.5 font-[myfont] text-2xl font-light">
              X
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <li key={l.href} className="nav-link-anim opacity-0">
              <a
                href={l.href}
                onClick={() => handleClick(l.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300
                  ${
                    active === l.href
                      ? "text-black"
                      : "text-black/70 hover:text-black"
                  }
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-[2px] after:bg-black after:transition-all after:duration-300
                  ${
                    active === l.href
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-btn-anim opacity-0 hidden md:inline-flex group relative items-center gap-2 overflow-hidden rounded-full border border-black/30 px-5 py-2.5 text-sm font-semibold text-black cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
          <span className="absolute bottom-0 left-0 h-0 w-full bg-gradient-to-r from-blue-950 via-blue-700 to-indigo-500 transition-all duration-500 ease-out group-hover:h-full"></span>

          <span className="relative z-10 transition-colors duration-300 group-hover:text-white tracking-wide">
            Get Started
          </span>

          <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
            →
          </span>
        </a>

        <button
          className="md:hidden text-black p-1 hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col items-center justify-center mt-3 mx-auto max-w-6xl rounded-2xl backdrop-blur-lg border border-white/30 p-4 bg-white/20 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => handleClick(l.href)}
              className={`block w-full text-center px-4 py-2.5 rounded-xl font-bold font-[myfont] transition-all duration-200 ${
                active === l.href
                  ? "text-blue-900 bg-white/40 shadow-sm font-semibold underline underline-offset-4"
                  : "text-black/70 hover:bg-white/20"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}