import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const points = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 1.5 + Math.random() * 2,
        color: `rgba(173, 216, 230, ${Math.random()})`,
        speedX: 0.1 + Math.random() * 0.8,
        speedY: 0.1 + Math.random() * 0.8,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach(point => {
        point.x += point.speedX;
        point.y += point.speedY;

        if (point.x > canvas.width || point.x < 0) {
          point.speedX *= -1;
        }
        if (point.y > canvas.height || point.y < 0) {
          point.speedY *= -1;
        }

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Clean up event listeners when the component unmounts
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="demo-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: 'radial-gradient(circle, #000000 0%, #16192E 100%)',
      }}
    />
  );
};

export default AnimatedBackground;
