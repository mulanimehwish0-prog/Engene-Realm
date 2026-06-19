import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "dot" | "star" | "ring";
  opacityRange: [number, number];
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const types: ("dot" | "star" | "ring")[] = ["dot", "star", "ring"];
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 6 + 2, // px
      duration: Math.random() * 20 + 10, // seconds
      delay: Math.random() * 10, // seconds
      type: types[Math.floor(Math.random() * types.length)],
      opacityRange: [Math.random() * 0.2 + 0.1, Math.random() * 0.4 + 0.3] as [number, number],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-primary/5"></div>
      
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute flex items-center justify-center"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: ["0%", "-50%", "0%"],
            x: ["0%", "20%", "0%"],
            opacity: [particle.opacityRange?.[0] ?? 0.2, particle.opacityRange?.[1] ?? 0.6, particle.opacityRange?.[0] ?? 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.type === "dot" && (
            <div 
              className="rounded-full bg-primary/60 blur-[1px]" 
              style={{ width: particle.size, height: particle.size }} 
            />
          )}
          {particle.type === "star" && (
            <div className="text-primary/70 leading-none" style={{ fontSize: particle.size * 2 }}>
              ✦
            </div>
          )}
          {particle.type === "ring" && (
            <div 
              className="rounded-full border-[1.5px] border-primary/40" 
              style={{ width: particle.size * 1.5, height: particle.size * 1.5 }} 
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
