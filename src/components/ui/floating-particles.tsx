import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = [
    { size: 8, top: '25%', left: '25%', delay: 0 },
    { size: 12, top: '75%', right: '25%', delay: 2 },
    { size: 4, top: '50%', left: '75%', delay: 4 },
    { size: 16, top: '16%', right: '33%', delay: 6 },
    { size: 6, top: '80%', left: '10%', delay: 8 },
    { size: 10, top: '30%', right: '15%', delay: 10 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="floating-particle absolute opacity-70"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
            right: particle.right,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
