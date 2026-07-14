import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Calendar, Phone, MessageSquare, Sparkles } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sparkle particle system on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }> = [];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create gold particles
    const createParticle = () => {
      const isGold = Math.random() > 0.3;
      return {
        x: Math.random() * width,
        y: height + Math.random() * 20,
        size: Math.random() * 2.5 + 0.5,
        speedY: -(Math.random() * 0.8 + 0.3),
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.3,
        fadeSpeed: Math.random() * 0.003 + 0.001,
        color: isGold
          ? `hsla(${Math.random() * 15 + 40}, 90%, 60%, `
          : `hsla(${Math.random() * 10 + 20}, 70%, 80%, `
      };
    };

    // Pre-populate particles
    for (let i = 0; i < 40; i++) {
      const p = createParticle();
      p.y = Math.random() * height;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn particles occasionally
      if (particles.length < 65 && Math.random() < 0.1) {
        particles.push(createParticle());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity -= p.fadeSpeed;

        if (p.opacity <= 0 || p.y < 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        // Glow effect
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = "rgba(212, 175, 55, 0.55)";
        ctx.fillStyle = p.color + p.opacity + ")";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0; // reset
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hello Jaynaan Beauty Salon, I would like to book a luxury service appointment at your Rawalpindi branch."
    );
    window.open(`https://wa.me/923000000000?text=${text}`, "_blank");
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 w-full h-full object-cover">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-45 contrast-105 saturate-[0.85]"
          poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/494165682.hd.mp4?s=d003b4b0a4306385d386c9d7496e579bf6d9bf7f&profile_id=170&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Fallback video if first one fails */}
          <source
            src="https://player.vimeo.com/external/414007138.sd.mp4?s=d70b55f1f9e23eb417efda0df5457ef45c571650&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Rich cinematic overlays */}
        <div className="absolute inset-0 bg-radial-gradient from-black/20 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/50" />
      </div>

      {/* Floating Sparkles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Hero Content Grid */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-black/50 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gold">
            Bahria Town Phase 7, Rawalpindi
          </span>
        </motion.div>

        {/* LOGO BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-2"
        >
          <h2 className="text-sm sm:text-lg font-mono tracking-[0.5em] text-gold/80 uppercase">
            JAYNAAN BEAUTY SALON
          </h2>
        </motion.div>

        {/* Tagline / Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white mb-6 leading-tight"
        >
          Enhance Your <br className="sm:hidden" />
          <span className="font-serif italic text-gradient bg-gradient-to-r from-amber-100 via-gold to-gold-hover bg-clip-text text-transparent font-normal">
            Beauty
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl text-xs sm:text-base md:text-lg text-zinc-300 font-sans tracking-wide mb-10 leading-relaxed font-light"
        >
          Enhance Your Beauty With Premium Salon Experience in Rawalpindi. Where global techniques match customized service design.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-none"
        >
          {/* Main Book Button */}
          <button
            onClick={() => scrollToSection("booking")}
            className="w-full sm:w-auto bg-gold hover:bg-gold-hover text-black font-sans text-xs sm:text-sm font-bold tracking-widest px-8 py-4 rounded-sm transition-all duration-300 uppercase flex items-center justify-center gap-2.5 active:scale-95 shadow-lg shadow-gold/10"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Book Appointment</span>
          </button>

          {/* Call Button */}
          <a
            href="tel:03000000000"
            className="w-full sm:w-auto border border-white/20 hover:border-gold bg-black/40 hover:bg-black/60 text-white hover:text-gold font-sans text-xs sm:text-sm font-bold tracking-widest px-8 py-4 rounded-sm transition-all duration-300 uppercase flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto border border-emerald-500/30 hover:border-emerald-400 bg-emerald-950/25 hover:bg-emerald-950/40 text-emerald-300 hover:text-emerald-200 font-sans text-xs sm:text-sm font-bold tracking-widest px-8 py-4 rounded-sm transition-all duration-300 uppercase flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Booking</span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
