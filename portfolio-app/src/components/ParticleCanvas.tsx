import { useEffect, useRef } from 'react';

interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
}

export function ParticleCanvas() {
      const canvasRef = useRef<HTMLCanvasElement>(null);

      useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            let particles: Particle[] = [];
            let animationFrameId: number;
            let mouse = { x: -1000, y: -1000 };

            // Brand colors: Flutter Blue, Light Blue, Firebase Amber
            const colors = ['#02569B', '#0175C2', '#FFCA28', '#ffffff'];

            const resize = () => {
                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;
                  initParticles();
            };

            const initParticles = () => {
                  particles = [];
                  const particleCount = Math.min(window.innerWidth / 10, 150); // Responsive count

                  for (let i = 0; i < particleCount; i++) {
                        particles.push({
                              x: Math.random() * canvas.width,
                              y: Math.random() * canvas.height,
                              vx: (Math.random() - 0.5) * 0.5,
                              vy: (Math.random() - 0.5) * 0.5,
                              size: Math.random() * 2 + 1,
                              color: colors[Math.floor(Math.random() * colors.length)],
                        });
                  }
            };

            const draw = () => {
                  ctx.clearRect(0, 0, canvas.width, canvas.height);

                  particles.forEach((p) => {
                        // Basic movement
                        p.x += p.vx;
                        p.y += p.vy;

                        // Bounce off edges
                        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                        // Mouse interaction (Repulsion/Attraction)
                        const dx = mouse.x - p.x;
                        const dy = mouse.y - p.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const maxDistance = 150;

                        if (distance < maxDistance) {
                              // Move away from mouse (Repulsion effect) - creates "Antigravity" feel
                              // To make it attraction, flip the sign of force
                              const forceDirectionX = dx / distance;
                              const forceDirectionY = dy / distance;
                              const force = (maxDistance - distance) / maxDistance;
                              const strength = 2; // Strength of interaction

                              p.vx -= forceDirectionX * force * strength * 0.05;
                              p.vy -= forceDirectionY * force * strength * 0.05;
                        }

                        // Draw particle
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                        ctx.fillStyle = p.color;
                        ctx.fill();

                        // Optional: Draw connections
                        if (distance < maxDistance) {
                              ctx.beginPath();
                              ctx.moveTo(p.x, p.y);
                              ctx.lineTo(mouse.x, mouse.y);
                              ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / maxDistance * 0.1})`;
                              ctx.stroke();
                        }
                  });

                  animationFrameId = requestAnimationFrame(draw);
            };

            const handleMouseMove = (e: MouseEvent) => {
                  const rect = canvas.getBoundingClientRect();
                  mouse.x = e.clientX - rect.left;
                  mouse.y = e.clientY - rect.top;
            };

            const handleMouseLeave = () => {
                  mouse.x = -1000;
                  mouse.y = -1000;
            }

            window.addEventListener('resize', resize);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseout', handleMouseLeave);

            resize();
            draw();

            return () => {
                  window.removeEventListener('resize', resize);
                  window.removeEventListener('mousemove', handleMouseMove);
                  window.removeEventListener('mouseout', handleMouseLeave);
                  cancelAnimationFrame(animationFrameId);
            };
      }, []);

      return (
            <canvas
                  ref={canvasRef}
                  className="absolute inset-0 z-0 pointer-events-none"
            />
      );
}
