import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Compass, 
  Send, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Share2, 
  Video, 
  Sparkles,
  Navigation,
  ExternalLink
} from "lucide-react";

export default function Contact() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const socialPlatforms = [
    { name: "Instagram", icon: Instagram, link: "#", color: "hover:text-pink-500 hover:shadow-pink-500/25" },
    { name: "Facebook", icon: Facebook, link: "#", color: "hover:text-blue-500 hover:shadow-blue-500/25" },
    { name: "TikTok", icon: Share2, link: "#", color: "hover:text-cyan-400 hover:shadow-cyan-400/25" },
    { name: "WhatsApp", icon: MessageSquare, link: "https://wa.me/923000000000", color: "hover:text-emerald-400 hover:shadow-emerald-400/25" },
    { name: "YouTube", icon: Video, link: "#", color: "hover:text-red-500 hover:shadow-red-500/25" }
  ];

  // Detect touch devices to fallback to auto-orbit animations instead of mouse-tilt
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Calculate tilt angles (limit pitch/yaw to a luxurious +/- 12 degrees max)
    const px = (x / box.width) * 100;
    const py = (y / box.height) * 100;
    const tiltX = (py - 50) / 4; // rotateX based on mouseY
    const tiltY = -(px - 50) / 4; // rotateY based on mouseX
    
    setTilt({ x: tiltX, y: tiltY });
    setShine({ x: px, y: py });
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setShine({ x: 50, y: 50 });
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Jaynaan+Beauty+Salon+Rawalpindi+Pakistan", "_blank");
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#070707] overflow-hidden border-t border-zinc-900">
      {/* High-end ambient atmospheric lights (Tesla style) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Cyber-grid background line detail */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Apple style Minimal & Dramatic Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.4em] uppercase text-gold font-bold block mb-4"
          >
            Aura & Location
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-sans font-light tracking-tight text-white mb-6"
          >
            Visit The Lounge at <span className="font-serif italic text-gold">F-11 Markaz</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" 
          />
        </div>

        {/* Grid Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* LEFT: Luxurious Glassmorphism Info Panel */}
          <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
            <div className="p-8 md:p-10 rounded-2xl bg-zinc-950/45 border border-zinc-800/60 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              {/* Card ambient golden top border ray */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              
              <div className="space-y-8">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold block mb-1">
                    Premium Grooming Lounge
                  </span>
                  <h3 className="text-3xl font-sans font-light tracking-wide text-white uppercase">
                    JAYNAAN BEAUTY SALON <span className="text-gold font-serif italic text-2xl lowercase font-normal">rawalpindi</span>
                  </h3>
                </div>

                {/* Info block lines */}
                <div className="space-y-6 text-zinc-300">
                  {/* Location */}
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-gold flex-shrink-0 shadow-lg group-hover:border-gold/30 transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                        Luxury Address
                      </span>
                      <p className="text-sm font-light text-zinc-200 leading-relaxed">
                        Plot 23, Main Boulevard, Phase 7,<br />
                        Bahria Town, Rawalpindi, 46000, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-gold flex-shrink-0 shadow-lg group-hover:border-gold/30 transition-all duration-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                        Business Hours
                      </span>
                      <p className="text-sm font-light text-zinc-200 leading-relaxed font-mono">
                        11:00 AM - 10:00 PM<br />
                        <span className="text-gold/80 text-[11px] block mt-1 uppercase tracking-wider font-semibold font-sans">
                          ✦ 7 Days A Week ✦
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Hotlines */}
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-gold flex-shrink-0 shadow-lg group-hover:border-gold/30 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                        Contact Line
                      </span>
                      <a href="tel:03000000000" className="text-lg font-bold font-mono text-white hover:text-gold transition-colors block">
                        0300-0000000
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-gold flex-shrink-0 shadow-lg group-hover:border-gold/30 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">
                        Concierge Mail
                      </span>
                      <a href="mailto:concierge@jaynaansalon.com" className="text-sm font-light text-zinc-200 hover:text-gold transition-all">
                        concierge@jaynaansalon.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Background Stamp */}
              <div className="absolute right-0 bottom-0 translate-x-6 translate-y-6 text-zinc-900/10 pointer-events-none select-none font-serif text-9xl italic">
                J
              </div>
            </div>

            {/* Quick Actions (Hotline / WhatsApp) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:03000000000"
                className="flex-1 justify-center bg-zinc-900 hover:bg-gold border border-zinc-800 hover:text-black group text-white font-sans text-xs font-semibold tracking-widest py-4.5 px-6 text-center rounded-xl uppercase flex items-center gap-2.5 transition-all shadow-xl active:scale-95"
              >
                <Phone className="w-4 h-4 text-gold group-hover:text-black transition-colors" />
                <span>Call Hotline</span>
              </a>
              <button
                onClick={() => {
                  const text = encodeURIComponent("Hello Jaynaan Beauty Salon, I'd like to book a luxury session.");
                  window.open(`https://wa.me/923000000000?text=${text}`, "_blank");
                }}
                className="flex-1 justify-center bg-emerald-950/20 hover:bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-sans text-xs font-semibold tracking-widest py-4.5 px-6 rounded-xl uppercase flex items-center gap-2.5 transition-all active:scale-95 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>WhatsApp Lounge</span>
              </button>
            </div>

            {/* Social Circle */}
            <div className="space-y-4">
              <span className="block text-[10px] font-mono tracking-[0.2em] uppercase text-zinc-500">
                Join our Inner Circle
              </span>
              <div className="flex items-center gap-4">
                {socialPlatforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <motion.a
                      key={platform.name}
                      href={platform.link}
                      whileHover={{ scale: 1.15, y: -4 }}
                      className={`w-11 h-11 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gold transition-all shadow-lg ${platform.color} duration-300 hover:border-gold/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]`}
                      aria-label={`Follow Jaynaan Beauty Salon on ${platform.name}`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: High-Fidelity 3D Glassmorphic Interactive Map Card */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center order-1 lg:order-2">
            
            {/* The outer 3D stage wrapper */}
            <div 
              className="w-full max-w-[580px] h-[460px] md:h-[500px] flex items-center justify-center [perspective:1000px] relative select-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              
              {/* Inner 3D Rotator Board */}
              <motion.div
                ref={cardRef}
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={
                  isMobile
                    ? {
                        rotateX: [0, 4, -4, 0],
                        rotateY: [0, -6, 6, 0],
                        transition: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }
                    : {
                        rotateX: tilt.x,
                        rotateY: tilt.y,
                        transition: { type: "spring", stiffness: 120, damping: 25 },
                      }
                }
                className="w-full h-full rounded-3xl bg-[#0F0F0F]/85 border border-zinc-800 shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative flex flex-col justify-between overflow-hidden p-6 group"
              >
                {/* Dynamic Shine Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle 320px at ${shine.x}% ${shine.y}%, rgba(212,175,55,0.07), transparent)`,
                    zIndex: 3
                  }}
                />

                {/* Sub-Header HUD panel (Z-Index 20, translates slightly forward) */}
                <div 
                  style={{ transform: "translateZ(30px)" }}
                  className="w-full p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 flex items-center justify-between z-20 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/45 flex items-center justify-center text-gold shadow-lg shadow-gold/10">
                      <Compass className="w-5 h-5 animate-spin-slow" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-white tracking-wide">F-11 Markaz Core HUD</span>
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest">33.6844° N, 72.9889° E</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[9px] text-zinc-400 font-semibold tracking-wider uppercase">Active</span>
                  </div>
                </div>

                {/* Map Vector Stage with high-fidelity depth layers */}
                <div className="relative w-full flex-grow my-4 rounded-2xl overflow-hidden bg-black/40 border border-zinc-900 flex items-center justify-center">
                  
                  {/* LAYER 1: Deep Background Glow & Ambient Radar (translateZ: 0px) */}
                  <div className="absolute inset-0 bg-[#080808] opacity-100 pointer-events-none">
                    {/* Grid network background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    {/* Radar sweep radial ring */}
                    <motion.div 
                      animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 m-auto w-80 h-80 rounded-full border border-gold/5 bg-gradient-to-r from-gold/0 via-gold/[0.015] to-gold/0 blur-sm pointer-events-none"
                    />
                  </div>

                  {/* LAYER 2: Glass Landmass Sectors & Parks (translateZ: 10px) */}
                  <div 
                    style={{ transform: "translateZ(10px)" }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {/* Abstract high-end golden outline shapes representing Islamabad layout */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-zinc-800/45 bg-zinc-950/20" />
                    
                    {/* Volumetric green space/park element */}
                    <div className="absolute top-1/4 left-1/4 w-28 h-20 bg-emerald-950/15 border border-emerald-500/10 rounded-xl rotate-[12deg] backdrop-blur-[1px]" />
                    <span className="absolute top-1/3 left-[28%] text-[8px] font-mono text-emerald-500/65 tracking-widest uppercase">
                      Margalla Enclave
                    </span>

                    {/* Neighboring sectors */}
                    <div className="absolute bottom-1/4 right-[10%] p-2 rounded-lg border border-zinc-800/50 bg-zinc-950/40 text-[8px] text-zinc-500 uppercase tracking-wider font-mono">
                      Sector G-11 Bound
                    </div>
                  </div>

                  {/* LAYER 3: Interactive Road Networks & Volumetric Routes (translateZ: 20px) */}
                  <div 
                    style={{ transform: "translateZ(20px)" }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {/* Grid intersection roads */}
                    <div className="absolute w-[180%] h-6 bg-zinc-900/60 border-y border-zinc-800/40 rotate-[15deg] -translate-x-20 top-1/3" />
                    <div className="absolute w-[180%] h-4 bg-zinc-900/60 border-y border-zinc-800/40 -rotate-[35deg] translate-y-24 left-[-10%]" />
                    <div className="absolute w-6 h-[180%] bg-zinc-900/60 border-x border-zinc-800/40 left-1/3 -translate-y-20" />
                    <div className="absolute w-6 h-[180%] bg-zinc-900/60 border-x border-zinc-800/40 right-1/4 -translate-y-20" />

                    {/* Dynamic flowing traffic lights along the main sector artery */}
                    <motion.div 
                      animate={{ x: ["-50%", "150%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-[37%] left-0 w-36 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80"
                    />
                    <motion.div 
                      animate={{ y: ["-50%", "150%"] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1.5 }}
                      className="absolute top-0 left-[34%] w-[1.5px] h-36 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60"
                    />

                    {/* F-11 Circular Markaz Outline */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border-2 border-gold/10 flex items-center justify-center bg-zinc-950/30">
                      <div className="absolute w-36 h-36 rounded-full border border-gold/15 border-dashed" />
                      <span className="font-mono text-[9px] tracking-[0.4em] text-gold/30 uppercase font-bold">
                        Markaz Roundabout
                      </span>
                    </div>
                  </div>

                  {/* LAYER 4: Semi-Transparent Volumetric 3D Glass Buildings (translateZ: 35px) */}
                  <div 
                    style={{ transform: "translateZ(35px)" }}
                    className="absolute inset-0 pointer-events-none flex items-center justify-center"
                  >
                    {/* Abstract building blocks in isometric spacing */}
                    {/* Building 1: West Plaza */}
                    <div className="absolute top-[28%] right-[22%] w-12 h-14 bg-zinc-900/70 border border-zinc-700/60 rounded-md shadow-lg flex flex-col justify-between p-1.5 backdrop-blur-[2px]">
                      <div className="w-full h-1 bg-zinc-800 rounded" />
                      <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-tight text-center">Block B</span>
                    </div>

                    {/* Building 2: Elite Arcade */}
                    <div className="absolute bottom-[28%] left-[24%] w-14 h-12 bg-zinc-900/70 border border-zinc-700/60 rounded-md shadow-lg flex flex-col justify-between p-1.5 backdrop-blur-[2px]">
                      <div className="w-full h-1 bg-zinc-800 rounded" />
                      <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-tight text-center">Block D</span>
                    </div>

                    {/* Volumetric Jaynaan Building (Where Jaynaan Beauty Salon is located) */}
                    <div className="absolute w-24 h-20 bg-gradient-to-b from-zinc-900 to-black border border-gold/30 rounded-xl shadow-[0_15px_30px_rgba(212,175,55,0.12)] flex flex-col justify-between p-2.5 z-10">
                      <div className="flex items-center justify-between">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                        <span className="text-[7px] font-mono text-gold/90 uppercase tracking-widest font-bold">Lvl 1</span>
                      </div>
                      <div className="text-center">
                        <span className="block text-[8px] font-sans font-black text-white uppercase tracking-wider">Bahria</span>
                        <span className="block text-[8px] font-sans font-black text-gold uppercase tracking-wider">Phase 7</span>
                      </div>
                    </div>
                  </div>

                  {/* LAYER 5: Holographic Location Pin & Pulse Rings (translateZ: 55px) */}
                  <div 
                    style={{ transform: "translateZ(55px)" }}
                    className="absolute z-10 flex flex-col items-center pointer-events-auto"
                  >
                    {/* Interactive Glowing holographic pin with vertical light shaft */}
                    <div className="relative flex flex-col items-center justify-center">
                      
                      {/* Vertical Hologram Light Beam */}
                      <div className="absolute bottom-4 w-[2px] h-24 bg-gradient-to-t from-gold via-gold/40 to-transparent pointer-events-none" />

                      {/* Ripple pulse effects on the map base coordinate */}
                      <div className="absolute top-2 w-14 h-14 bg-gold/15 rounded-full animate-ping pointer-events-none" />
                      <div className="absolute top-2 w-8 h-8 bg-gold/30 rounded-full animate-pulse pointer-events-none" />

                      {/* 3D Glass Floating Location pin */}
                      <motion.div
                        animate={{ 
                          y: [-8, 6, -8],
                          rotateY: [0, 15, -15, 0]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold via-yellow-500 to-amber-600 shadow-[0_10px_25px_rgba(212,175,55,0.45)] border border-white/20 flex items-center justify-center text-black cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                        onClick={handleDirections}
                        title="Click to Navigate"
                      >
                        <Navigation className="w-5 h-5 fill-black transform rotate-45 text-black" />
                      </motion.div>
                    </div>

                    {/* Floating Label with Glow */}
                    <motion.div 
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      className="mt-4 px-3.5 py-2 bg-zinc-950 border border-gold rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] flex items-center gap-2 cursor-pointer hover:border-white transition-colors"
                      onClick={handleDirections}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                      <span className="font-sans text-[10px] font-extrabold text-white uppercase tracking-widest font-mono">
                        Jaynaan Salon
                      </span>
                    </motion.div>
                  </div>

                  {/* Compass cardinal directions at bottom-right of map space */}
                  <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-zinc-950/80 border border-zinc-800 text-[10px] text-zinc-500 font-mono uppercase tracking-widest flex items-center gap-1.5 z-10 shadow-lg">
                    <span>N</span>
                    <span className="text-gold">▲</span>
                  </div>
                </div>

                {/* Apple-style Tactile 3D Action Button (translateZ: 25px) */}
                <div 
                  style={{ transform: "translateZ(25px)" }}
                  className="w-full relative z-20"
                >
                  <button
                    onClick={handleDirections}
                    className="w-full relative py-4 px-6 rounded-2xl font-sans text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 overflow-hidden group/btn bg-gradient-to-r from-gold via-yellow-500 to-amber-600 text-black shadow-[0_8px_0_#9A7B1C,0_15px_30px_rgba(212,175,55,0.25)] active:translate-y-[6px] active:shadow-[0_2px_0_#9A7B1C,0_5px_10px_rgba(212,175,55,0.15)] focus:outline-none flex items-center justify-center gap-2"
                  >
                    <Send className="w-4.5 h-4.5 text-black transform rotate-45" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4 ml-1 opacity-60" />
                  </button>
                </div>

              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

