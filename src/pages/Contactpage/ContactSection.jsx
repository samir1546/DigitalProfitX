import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  "E-commerce Management",
  "SEO Services",
  "Paid Ads Management",
  "Growth Package",
  "360° Ultimate Digital Presence",
];

const whyUsPoints = [
  "Proven track record with 200+ successful client projects",
  "Dedicated account managers for personalized service",
  "Data-driven strategies with transparent reporting",
  "Flexible packages tailored to your business needs",
];

export default function ContactSection() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const whyUsCardRef = useRef(null);
  const pointsRef = useRef([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 40, filter: "blur(12px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 2. Form & Direct Contact Cards Entrance Animation
      if (leftCardRef.current && rightCardRef.current) {
        gsap.fromTo(
          leftCardRef.current,
          { opacity: 0, x: -30, filter: "blur(8px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftCardRef.current,
              start: "top 80%",
            },
          }
        );

        gsap.fromTo(
          rightCardRef.current,
          { opacity: 0, x: 30, filter: "blur(8px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightCardRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Full-Width Bottom Card Entrance Animation
      if (whyUsCardRef.current) {
        gsap.fromTo(
          whyUsCardRef.current,
          { opacity: 0, y: 50, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whyUsCardRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 4. Points Stagger Reveal
      const points = pointsRef.current.filter(Boolean);
      if (points.length > 0) {
        gsap.fromTo(
          points,
          { opacity: 0, y: 20, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: whyUsCardRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-24 lg:py-36 antialiased font-['Inter',sans-serif] select-none overflow-hidden text-gray-900"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
      `}</style>

      {/* Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-purple-200/40 via-indigo-200/30 to-pink-100/30 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/30 via-purple-100/20 to-teal-100/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-12 relative z-10 space-y-12 lg:space-y-16">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#7c3aed] animate-pulse" />
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gray-600">
              Start The Transformation
            </p>
          </div>

          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.08] text-[#0f0f0f] -tracking-[0.03em] mb-5">
            Get in{" "}
            <em className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#2563eb]">
              Touch
            </em>
          </h2>

          <p className="text-[15px] sm:text-base leading-[1.8] text-gray-500 font-normal max-w-xl mx-auto">
            Ready to grow your digital presence? Contact us today and let's
            discuss how we can help your business succeed.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Left Form & Right Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Form Card */}
          <div
            ref={leftCardRef}
            className="lg:col-span-7 backdrop-blur-[10px]  border border-tl-[2px] rounded-[10px] p-8 sm:p-11 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(124,58,237,0.08)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-[myfont] text-gray-900 mb-2 tracking-tight">
                Send us a message
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-normal">
                Fill out the details below and our strategy team will reach back within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full text-emerald-600 border border-emerald-200/60 flex items-center justify-center text-3xl shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-light font-['Playfair_Display',serif] text-gray-900">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-gray-500 max-w-md">
                  Thank you for reaching out. A DigitalProfitX growth consultant will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Full Name Input */}
                  <div className="relative group/input">
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder=" "
                      value={formData.fullName}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-black py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none transition-colors duration-300 font-medium"
                    />
                    <label className="absolute left-0 top-3 text-xs font-medium uppercase tracking-wider text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#7c3aed] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-500">
                      Full Name *
                    </label>
                    {/* Fixed Single Accent Line on Hover/Focus */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-all duration-300 group-hover/input:w-full peer-focus:w-full" />
                  </div>

                  {/* Email Address Input */}
                  <div className="relative group/input">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-black py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none transition-colors duration-300 font-medium"
                    />
                    <label className="absolute left-0 top-3 text-xs font-medium uppercase tracking-wider text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#7c3aed] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-500">
                      Email Address *
                    </label>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-all duration-300 group-hover/input:w-full peer-focus:w-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Phone Number Input */}
                  <div className="relative group/input">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-black py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none transition-colors duration-300 font-medium"
                    />
                    <label className="absolute left-0 top-3 text-xs font-medium uppercase tracking-wider text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#7c3aed] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-500">
                      Phone Number *
                    </label>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-all duration-300 group-hover/input:w-full peer-focus:w-full" />
                  </div>

                  {/* Service Interest Dropdown */}
                  <div className="relative group/input">
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-black py-3 text-sm text-gray-900 focus:outline-none transition-colors duration-300 font-medium cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {servicesList.map((svc, i) => (
                        <option key={i} value={svc} className="text-gray-900">
                          {svc}
                        </option>
                      ))}
                    </select>
                    <label className="absolute left-0 -top-4 text-[10px] font-semibold uppercase tracking-wider text-gray-500 pointer-events-none">
                      Service Interest *
                    </label>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-all duration-300 group-hover/input:w-full" />
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group/input pt-2">
                  <textarea
                    name="message"
                    rows="3"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-gray-300 py-3 text-sm text-gray-900 placeholder-transparent focus:outline-none transition-colors duration-300 font-medium resize-none"
                  />
                  <label className="absolute left-0 top-5 text-xs font-medium uppercase tracking-wider text-gray-500 pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#7c3aed] peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-gray-500">
                    Your Message
                  </label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-all duration-300 group-hover/input:w-full peer-focus:w-full" />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.3)] hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] transition-all duration-500 ease-in-out group-hover:h-full" />
                    <span className="relative z-10 flex items-center gap-3">
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Info */}
          <div
            ref={rightCardRef}
            className="lg:col-span-5 border  border-black rounded-[10px] p-8 sm:p-11 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.08)] transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold font-[myfont] text-gray-900 mb-6 tracking-tight">
                Prefer to reach out directly?
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <a
                  href="mailto:digitalprofitxofficial@gmail.com"
                  className="group/item flex items-start gap-4 p-4 rounded-[3px]  border border-black hover:border-[#7c3aed]/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-full  text-[#7c3aed] border border-black flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:rotate-6 group-hover/item:scale-105">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-gray-400 mb-0.5">
                      Email
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate group-hover/item:text-[#7c3aed] transition-colors">
                      digitalprofitxofficial@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover/item:text-[#7c3aed] transition-colors" />
                </a>

                {/* Phone Item */}
                <a
                  href="tel:+918910056267"
                  className="group/item flex items-start gap-4 p-4 rounded-[3px]  border border-black hover:border-teal-500/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 border border-teal-900 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:rotate-6 group-hover/item:scale-105">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-gray-400 mb-0.5">
                      Phone
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 group-hover/item:text-teal-600 transition-colors">
                      +91 89100 56267
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover/item:text-teal-600 transition-colors" />
                </a>

                {/* Office Item */}
                <div className="group/item flex items-start gap-4 p-4 rounded-[3px]  border border-black transition-all duration-300 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 border border-blue-800 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:rotate-6">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-gray-400 mb-0.5">
                      Office
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                      New Town, Kolkata, West Bengal 711102
                    </p>
                  </div>
                </div>

                {/* Business Hours Item */}
                <div className="group/item flex items-start gap-4 p-4 rounded-[3px]  border border-black transition-all duration-300 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 border border-amber-800 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:rotate-6">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-gray-400 mb-0.5">
                      Business Hours
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-800">
                      Monday – Friday: 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FULL-WIDTH BOTTOM CARD: "Why choose DigitalProfitX?" (Bahar niche rakh diya) */}
        <div
          ref={whyUsCardRef}
          className="w-full  backdrop-blur-[3px] border border-black rounded-[10px] p-8 sm:p-11 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.06)] transition-all duration-500"
        >
          <div className="max-w-3xl mb-8">
            <h4 className="text-2xl sm:text-3xl font-light font-['Playfair_Display',serif] text-gray-900 tracking-tight">
              Why choose{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-[#2563eb]">
                DigitalProfitX?
              </span>
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyUsPoints.map((point, idx) => (
              <div
                key={idx}
                ref={(el) => (pointsRef.current[idx] = el)}
                className="flex flex-col items-start gap-3 p-5 rounded-[3px]  border border-black shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/point"
              >
                <div className="w-8 h-8 rounded-xl bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center text-sm shrink-0 font-bold transition-transform duration-300 group-hover/point:scale-110">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-700 font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}