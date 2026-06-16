import React, { useEffect, useRef } from "react";
import gsap from "gsap";
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
      className="relative w-full bg-slate-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="footer-anim space-y-4">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
              <Sparkles className="h-5 w-5 text-blue-950" />
            </div>

            <span className="text-lg font-semibold text-white">
              DigitalProfit<span className="text-whtie">X</span>
            </span>
          </a>
          <p className="text-sm text-slate-400 leading-relaxed">
            Grow your digital presence with expert e-commerce management, SEO,
            and paid advertising services.
          </p>
        </div>

      
        <div className="footer-anim space-y-3">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-sm text-slate-400">
            {["Home", "Services", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-blue-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-anim space-y-3">
          <h2 className="text-lg font-semibold">Contact Info</h2>
          <p className="text-sm text-slate-400">
            digitalprofitxofficial@gmail.com
          </p>
          <p className="text-sm text-slate-400">+91 8910056267</p>
          <p className="text-sm text-slate-400">
            New Town, Kolkata, West Bengal 711102
          </p>
        </div>

        <div className="footer-anim space-y-3">
          <h2 className="text-lg font-semibold">Follow Us</h2>

          <div className="flex gap-4 text-xl">
            <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
            <FaFacebook className="hover:text-blue-500 transition cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 transition cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 transition cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="footer-anim border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © 2026 <span className="text-white">DigitalProfitX</span>. All rights
        reserved. <span className="mx-2">|</span>
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="mx-2">|</span>
        <span className="hover:text-white cursor-pointer">
          Terms of Service
        </span>
      </div>
    </footer>
  );
};

export default Footer;
