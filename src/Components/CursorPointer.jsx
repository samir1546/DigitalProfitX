import React, { useEffect, useRef } from "react";

export default function CursorPointer() {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

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

    // Initial mouse center position
    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      const m = mouseRef.current;

      // Smooth Interpolation (Lerp) for ultra-fluid movement
      m.x += (m.targetX - m.x) * 0.2;
      m.y += (m.targetY - m.y) * 0.2;

      // Store smoothed point
      pointsRef.current.push({ x: m.x, y: m.y, time: now });

      // Trail Duration (2.2 Seconds tak rahega fir fade hoga)
      const TRAIL_LIFETIME = 2200;

      // Remove points older than lifetime
      pointsRef.current = pointsRef.current.filter(
        (p) => now - p.time <= TRAIL_LIFETIME,
      );

      const points = pointsRef.current;

      // Draw Light Chocolate Smooth Fine Pen Stroke
      if (points.length > 1) {
        for (let i = 1; i < points.length; i++) {
          const p1 = points[i - 1];
          const p2 = points[i];

          const age = now - p2.time;
          const alpha = Math.max(0, 1 - age / TRAIL_LIFETIME);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          // Soft Light Chocolate Color (RGB: 155, 105, 70)
          ctx.strokeStyle = `rgba(155, 105, 70, ${alpha * 0.85})`;
          ctx.lineWidth = 1.6; // Fine Patla Tip
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          // Complete Shadow Removal
          ctx.shadowBlur = 0;
          ctx.shadowColor = "transparent";

          ctx.stroke();
        }
      }

      // Small Soft Pen Tip Dot
      if (points.length > 0) {
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(155, 105, 70, 0.9)";
        ctx.fill();
      }

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
      }}
    />
  );
}
