import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scissors, Sparkles } from "lucide-react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [textStep, setTextStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Generate floating particles coordinates deterministically to avoid SSR mismatch / React hydration issues
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const angle = (i / 20) * Math.PI * 2;
    const distance = 30 + (i % 3) * 15; // radial distance from center
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 20, // drift slightly up
      size: (i % 3) * 1.2 + 1.5,
      duration: 3 + (i % 4) * 0.8,
      delay: (i % 5) * 0.4,
    };
  });

  const sparkles = [
    { top: "25%", left: "30%", delay: 0.2, size: 14 },
    { top: "35%", right: "28%", delay: 0.8, size: 18 },
    { bottom: "32%", left: "25%", delay: 1.4, size: 16 },
    { bottom: "28%", right: "32%", delay: 0.5, size: 12 },
  ];

  useEffect(() => {
    const startTime = Date.now();

    // Text step transition
    const textTimer = setTimeout(() => {
      setTextStep(1);
    }, 1600);

    // Lock page scroll while preloader is active
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      const minDuration = 3200; // Let the beautiful text step animate
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        setIsVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // High performance timeout fallback (ensures no infinite loading)
    const fallbackTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fallbackTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Handle transition completion
  const handleAnimationComplete = () => {
    document.body.style.overflow = "";
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isVisible && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] overflow-hidden select-none"
        >
          {/* Subtle luxurious background radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* Floating Gold Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-[#D4AF37]"
                style={{
                  width: p.size,
                  height: p.size,
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [0, p.x, p.x * 1.4],
                  y: [0, p.y, p.y - 120],
                  opacity: [0, 0.7, 0],
                  scale: [0.5, 1.2, 0.2],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Twinkling Luxury Sparkles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparkles.map((s, idx) => (
              <motion.div
                key={idx}
                className="absolute text-[#D4AF37]"
                style={{
                  top: s.top,
                  left: s.left,
                  right: s.right,
                }}
                animate={{
                  opacity: [0.1, 0.9, 0.1],
                  scale: [0.8, 1.3, 0.8],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: s.delay,
                  ease: "easeInOut",
                }}
              >
                <Sparkles style={{ width: s.size, height: s.size }} />
              </motion.div>
            ))}
          </div>

          {/* Logo Container and Rings */}
          <div className="relative flex flex-col items-center justify-center mb-10">
            {/* Outermost slow spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full border border-dashed border-[#D4AF37]/25"
            />

            {/* Inner inverse-spinning ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute w-36 h-36 md:w-46 md:h-46 rounded-full border border-double border-[#D4AF37]/15"
            />

            {/* Pulsing light glow behind logo */}
            <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#D4AF37]/5 blur-xl animate-pulse" />

            {/* Main Emblem / Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: [0.96, 1.04, 0.96],
                filter: [
                  "drop-shadow(0 0 12px rgba(212,175,55,0.25))",
                  "drop-shadow(0 0 28px rgba(212,175,55,0.6))",
                  "drop-shadow(0 0 12px rgba(212,175,55,0.25))",
                ],
              }}
              transition={{
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1, ease: "easeOut" },
              }}
              className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-zinc-950 border border-[#D4AF37]/35 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            >
              <div className="flex flex-col items-center gap-1.5">
                <Scissors className="w-8 h-8 md:w-12 md:h-12 text-[#D4AF37] transform -rotate-45" />
                <span className="font-serif text-[11px] md:text-xs tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
                  Jaynaan
                </span>
              </div>
            </motion.div>
          </div>

          {/* Slogan & Welcome Text Transitions */}
          <div className="h-12 flex items-center justify-center px-4 max-w-md">
            <AnimatePresence mode="wait">
              {textStep === 0 ? (
                <motion.h2
                  key="welcome-text"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-serif text-lg md:text-2xl text-white tracking-[0.2em] text-center uppercase"
                >
                  Welcome To <span className="text-[#D4AF37] font-semibold">Jaynaan Salon</span>
                </motion.h2>
              ) : (
                <motion.h2
                  key="motto-text"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="font-mono text-[10px] md:text-xs text-[#D4AF37]/90 tracking-[0.4em] text-center uppercase leading-relaxed font-light"
                >
                  &ldquo;Be The Best Version Of Yourself&rdquo;
                </motion.h2>
              )}
            </AnimatePresence>
          </div>

          {/* Micro-loading status line at the bottom */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
