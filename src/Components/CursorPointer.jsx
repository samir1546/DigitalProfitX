import { useEffect, useRef } from "react";

export default function CursorPointer() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  
  const ring = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    stiffness: 0.12, 
    damping: 0.65, 
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    
    mouse.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    };
    ring.current.x = window.innerWidth / 2;
    ring.current.y = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouse.current.targetX = e.clientX;
      mouse.current.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const m = mouse.current;
      const r = ring.current;

      
      m.x += (m.targetX - m.x) * 0.3;
      m.y += (m.targetY - m.y) * 0.3;

      
      let ax = (m.x - r.x) * r.stiffness;
      let ay = (m.y - r.y) * r.stiffness;

      r.vx = (r.vx + ax) * r.damping;
      r.vy = (r.vy + ay) * r.damping;

      r.x += r.vx;
      r.y += r.vy;

      
      const velocity = Math.sqrt(r.vx * r.vx + r.vy * r.vy);
      const angle = Math.atan2(r.vy, r.vx);

      
      const stretch = Math.min(velocity * 0.035, 1.2);

      
      ctx.save();
      ctx.translate(r.x, r.y);
      ctx.rotate(angle);

      
      ctx.scale(1 + stretch, 1 / (1 + stretch));

      
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.fill();

      
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.restore();

      
      ctx.beginPath();
      ctx.arc(m.x, m.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "difference", 
      }}
    />
  );
}
