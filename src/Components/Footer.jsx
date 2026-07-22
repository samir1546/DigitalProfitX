import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".footer-anim",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-slate-950 text-white overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Logo Section */}
        <div className="footer-anim space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 group cursor-pointer"
          >
            {/* Animated Glowing Icon Wrapper */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[360deg] group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              <Sparkles className="h-5 w-5 text-blue-400 transition-transform duration-500 group-hover:scale-110" />
            </div>

            {/* Glowing Brand Text */}
            <span className="text-lg font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-slate-200">
              DigitalProfit
              <span className="text-blue-500 inline-block transition-transform duration-500 group-hover:scale-125 group-hover:translate-x-0.5 font-[myfont] text-2xl font-light drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                X
              </span>
            </span>
          </Link>

          <p className="text-sm text-slate-400 leading-relaxed font-light">
            Grow your digital presence with expert e-commerce management, SEO,
            and paid advertising services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-anim space-y-3">
          <h2 className="text-lg font-semibold tracking-wide text-slate-200">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm text-slate-400 font-light">
            {["Home", "Services", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-blue-400 transition-colors duration-300 cursor-pointer w-fit"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-anim space-y-3">
          <h2 className="text-lg font-semibold tracking-wide text-slate-200">
            Contact Info
          </h2>
          <p className="text-sm text-slate-400 font-light hover:text-slate-200 transition-colors">
            digitalprofitxofficial@gmail.com
          </p>
          <p className="text-sm text-slate-400 font-light">+91 8910056267</p>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            New Town, Kolkata, West Bengal 711102
          </p>
        </div>

        {/* Social Links */}
        <div className="footer-anim space-y-3">
          <h2 className="text-lg font-semibold tracking-wide text-slate-200">
            Follow Us
          </h2>
          <div className="flex gap-4 text-xl">
            <FaInstagram className="text-slate-400 hover:text-pink-500 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <FaFacebook className="text-slate-400 hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <FaLinkedin className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer" />
            <FaTwitter className="text-slate-400 hover:text-sky-400 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-anim border-t border-slate-800/80 py-6 text-center text-sm text-slate-500 font-light">
        © 2026 <span className="text-white font-medium">DigitalProfitX</span>.
        All rights reserved. <span className="mx-2 text-slate-700">|</span>
        <span className="hover:text-slate-300 transition-colors cursor-pointer">
          Privacy Policy
        </span>
        <span className="mx-2 text-slate-700">|</span>
        <span className="hover:text-slate-300 transition-colors cursor-pointer">
          Terms of Service
        </span>
      </div>
    </footer>
  );
};

export default Footer;
