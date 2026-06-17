import { useEffect, useRef } from 'react';
import type { Entry } from '@/lib/types';

export const meta: Entry = {
  id: 'particle-background',
  name: 'Particle Background',
  category: 'layout-effects',
  commonality: 3,
  aliases: ['Particle Field', 'Constellation'],
  description:
    'An animated field of small moving dots or shapes used as an ambient background, sometimes reacting to the cursor.',
  whenToUse: [
    'Tech or product heroes wanting subtle living motion',
    'Backdrops where gentle movement adds atmosphere',
  ],
  whenNotToUse: [
    'Performance-sensitive pages or low-power devices',
    'Behind text that needs stable contrast',
  ],
  relatedTo: ['aurora-background', 'animated-noise', 'spotlight-effect'],
  source: 'reactbits',
  code: {
    language: 'tsx',
    filename: 'particle-background.tsx',
    content: `useEffect(() => {
  const ctx = canvas.getContext("2d");
  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (const p of points) { p.x += p.vx; p.y += p.vy; /* bounce + draw */ }
    raf = requestAnimationFrame(tick);
  }
  tick();
  return () => cancelAnimationFrame(raf);
}, []);`,
  },
};

const W = 230;
const H = 150;

export default function Demo() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    canvas.width = W;
    canvas.height = H;
    const N = 26;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
    }));
    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 48) {
            ctx.strokeStyle = `rgba(197,242,74,${0.18 * (1 - d / 48)})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = 'rgba(197,242,74,0.85)';
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={ref} className="h-[150px] w-[230px] rounded-xl border border-line bg-bg" />;
}
