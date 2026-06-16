import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdStorefront } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { HiRocketLaunch } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    icon: MdStorefront,
    title: "E-commerce Management",
    description:
      "Complete store management for Amazon, Flipkart, and Meesho. We handle listings, inventory, and customer service to maximize your sales.",
    tag: "E-commerce",
    link: "https://digitalprofitx.com/services",
    glow: "radial-gradient(ellipse at center, rgba(139,92,246,0.25) 0%, transparent 70%)",
    iconBg: "linear-gradient(135deg, #c4b5fd, #818cf8)",
    accent: "#7c3aed",
    tagColor: "rgba(124,58,237,0.1)",
    tagText: "#7c3aed",
  },
  {
    id: "02",
    icon: TbSeo,
    title: "SEO Services",
    description:
      "Improve your search rankings and drive organic traffic with data-driven SEO strategies tailored to your business goals.",
    tag: "SEO",
    link: "https://digitalprofitx.com/services",
    glow: "radial-gradient(ellipse at center, rgba(16,185,129,0.22) 0%, transparent 70%)",
    iconBg: "linear-gradient(135deg, #6ee7b7, #0d9488)",
    accent: "#0d9488",
    tagColor: "rgba(13,148,136,0.1)",
    tagText: "#0d9488",
  },
  {
    id: "03",
    icon: RiAdvertisementFill,
    title: "Paid Ads Management",
    description:
      "Expert management of Facebook Ads, Google Ads, and YouTube Ads campaigns with proven ROI optimization techniques.",
    tag: "Paid Ads",
    link: "https://digitalprofitx.com/services",
    glow: "radial-gradient(ellipse at center, rgba(251,113,133,0.25) 0%, transparent 70%)",
    iconBg: "linear-gradient(135deg, #fda4af, #f97316)",
    accent: "#e11d48",
    tagColor: "rgba(225,29,72,0.1)",
    tagText: "#e11d48",
  },
  {
    id: "04",
    icon: HiRocketLaunch,
    title: "Growth Packages",
    description:
      "Comprehensive digital marketing packages designed to scale your business with integrated strategies across all channels.",
    tag: "Growth",
    link: "https://digitalprofitx.com/services",
    glow: "radial-gradient(ellipse at center, rgba(236,72,153,0.22) 0%, transparent 70%)",
    iconBg: "linear-gradient(135deg, #f9a8d4, #a78bfa)",
    accent: "#9333ea",
    tagColor: "rgba(147,51,234,0.1)",
    tagText: "#9333ea",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const progressRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const section = sectionRef.current;
      const cards = cardsRef.current;
      const totalCards = cards.length;

      
      const leftElements = section.querySelectorAll(
        ".services-eyebrow, .services-heading, .services-desc, .services-progress-wrap",
      );

      gsap.fromTo(
        leftElements,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.2)", 
          scrollTrigger: {
            trigger: section,
            start: "top 50%", 
            toggleActions: "play none none reverse",
          },
        },
      );

    
      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.94,
        rotateX: 8,
        transformOrigin: "center bottom",
      });
      gsap.set(cards[0], { opacity: 1, y: 0, scale: 1, rotateX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * (totalCards - 0.6)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          onUpdate: (self) => {
            const progress = self.progress;
            const activeIndex = Math.min(
              Math.floor(progress * totalCards),
              totalCards - 1,
            );
            if (counterRef.current) {
              counterRef.current.textContent = `0${activeIndex + 1}`;
            }
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${progress})`;
            }
          },
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const outCard = cards[i];
        const inCard = cards[i + 1];

        tl.to(
          outCard,
          {
            opacity: 0,
            y: -40,
            scale: 0.96,
            rotateX: -6,
            duration: 0.5,
            ease: "power2.inOut",
          },
          i * 1,
        ).fromTo(
          inCard,
          { opacity: 0, y: 70, scale: 0.93, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          i * 1 + 0.3,
        );
      }
    });

    mm.add("(max-width: 900px)", () => {
      const section = sectionRef.current;
      const cards = cardsRef.current;

      const leftElements = section.querySelectorAll(
        ".services-eyebrow, .services-heading, .services-desc",
      );

      gsap.fromTo(
        leftElements,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%", 
            toggleActions: "play none none reverse",
          },
        },
      );

     
      gsap.set(cards, { opacity: 1, y: 0, scale: 1, rotateX: 0 });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500&display=swap');

        .services-section {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .services-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 1200px;
          padding: 0 60px;
          align-items: center;
          height: 100%;
        }

        .services-left {
          padding-right: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .services-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 20px;
        }

        .services-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(38px, 4.5vw, 58px);
          font-weight: 400;
          line-height: 1.12;
          color: #0f0f0f;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .services-heading em {
          color: #7c3aed;
        }

        .services-desc {
          font-size: 15px;
          line-height: 1.75;
          color: #6b7280;
          font-weight: 400;
          max-width: 360px;
          margin-bottom: 48px;
        }

        .services-progress-wrap {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .services-progress-meta {
          display: flex;
          align-items: center;
        }

        .services-counter {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #9ca3af;
        }

        .services-track {
          height: 1px;
          background: rgba(0,0,0,0.08);
          border-radius: 1px;
          overflow: hidden;
          width: 160px;
          margin-top: 8px;
        }

        .services-fill {
          height: 100%;
          background: linear-gradient(to right, #7c3aed, #0d9488);
          transform: scaleX(0.25);
          transform-origin: left;
          border-radius: 1px;
        }

        .services-right {
          position: relative;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .svc-card-glow {
          position: absolute;
          inset: -60px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .svc-card {
          position: absolute;
          width: 100%;
          max-width: 460px;
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 10px;
          padding: 44px 44px 40px;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.9) inset,
            0 24px 64px rgba(0,0,0,0.06),
            0 4px 16px rgba(0,0,0,0.04);
          will-change: transform, opacity;
          z-index: 1;
          overflow: hidden;
        }

        .svc-bg-number {
          position: absolute;
          top: -24px;
          right: -8px;
          font-size: 160px;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
          color: rgba(0,0,0,0.025);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
        }

        .svc-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .svc-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        .svc-icon-wrap svg {
          width: 22px;
          height: 22px;
          color: white;
        }

        .svc-tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
        }
              
        .svc-title {
          color: #111827;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .svc-desc {
          font-size: 14.5px;
          line-height: 1.72;
          color: #6b7280;
          font-weight: 400;
        }

        .svc-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(0,0,0,0.06), transparent);
          margin: 26px 0;
        }

        .svc-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .svc-footer-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 500;
          color: #9ca3af;
          letter-spacing: 0.04em;
        }

        .svc-footer-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .svc-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
          padding: 7px 16px;
          border-radius: 100px;
          border: 1px solid currentColor;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .svc-learn-more:hover {
          opacity: 0.75;
          transform: translateX(2px);
        }

        @media (max-width: 900px) {
          .services-section {
            height: auto;
            padding: 80px 0;
            overflow: visible;
          }
          .services-layout {
            grid-template-columns: 1fr;
            padding: 0 24px;
            gap: 48px;
            height: auto;
          }
          .services-left { 
            padding-right: 0; 
            align-items: center;
            text-align: center;
          }
          .services-desc {
            margin-bottom: 24px;
          }
          .services-progress-wrap {
            display: none;
          }
          .services-right { 
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: 100%;
          }
          .svc-card { 
            position: relative;
            max-width: 100%; 
            padding: 32px 24px; 
          }
          .services-heading { 
            font-size: 36px; 
          }
        }
      `}</style>

      <div className="services-layout">
        <div className="services-left">
          <p className="services-eyebrow">Core Digital Services</p>
          <h2 className="services-heading">
            Solutions that
            <br />
            <em className="font-[myfont] font-medium">grow</em> your business
          </h2>
          <p className="services-desc">
            Targeted digital marketing solutions designed to help your business
            thrive in specific online channels.
          </p>

          <div className="services-progress-wrap">
            <div className="services-progress-meta">
              <span className="services-counter">
                <span ref={counterRef}>01</span>
                <span style={{ color: "#d1d5db" }}> / 04</span>
              </span>
            </div>
            <div className="services-track">
              <div className="services-fill" ref={progressRef} />
            </div>
          </div>
        </div>

        <div className="services-right">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="svc-card"
                ref={(el) => (cardsRef.current[i] = el)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="svc-card-glow"
                  style={{ background: svc.glow }}
                />
                <span className="svc-bg-number">{svc.id}</span>

                <div className="svc-card-top">
                  <div
                    className="svc-icon-wrap"
                    style={{ background: svc.iconBg }}
                  >
                    <Icon />
                  </div>
                  <span
                    className="svc-tag"
                    style={{ background: svc.tagColor, color: svc.tagText }}
                  >
                    {svc.tag}
                  </span>
                </div>

                <h3 className="svc-title font-[myfont] text-2xl font-light">
                  {svc.title}
                </h3>
                <p className="svc-desc">{svc.description}</p>

                <div className="svc-divider" />
                <div className="svc-footer">
                  <div className="svc-footer-left">
                    <div
                      className="svc-footer-dot"
                      style={{ background: svc.accent }}
                    />
                    Service {svc.id} of 04
                  </div>
                  <a
                    href={svc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svc-learn-more cursor-pointer"
                    style={{ color: svc.accent }}
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
