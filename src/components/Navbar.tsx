import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Scissors, Calendar, Phone } from "lucide-react";

interface NavbarProps {
  activeView: "home" | "services";
  setActiveView: (view: "home" | "services") => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeView, setActiveView, scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", type: "view", id: "home" },
    { name: "About", type: "scroll", id: "about" },
    { name: "Services", type: "scroll", id: "services-preview" },
    { name: "Advanced Catalog", type: "view", id: "services" },
    { name: "Packages", type: "scroll", id: "packages" },
    { name: "Facial Science", type: "scroll", id: "facial-benefits" },
    { name: "Gallery", type: "scroll", id: "gallery" },
    { name: "Reviews", type: "scroll", id: "reviews" },
    { name: "Contact", type: "scroll", id: "contact" }
  ];

  const handleLinkClick = (link: { name: string; type: string; id: string }) => {
    setMobileMenuOpen(false);
    if (link.type === "view") {
      setActiveView(link.id as "home" | "services");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveView("home");
      // Wait for React to switch view to home, then scroll
      setTimeout(() => {
        scrollToSection(link.id);
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-gold/20 py-3 shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-[#0A0A0A]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Emblem */}
          <div 
            onClick={() => { setActiveView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-black/40 overflow-hidden group-hover:border-gold transition-colors">
              <Scissors className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-gold/5 animate-spin-slow pointer-events-none" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-gold group-hover:brightness-110 transition-colors uppercase">
                Jaynaan
              </span>
              <span className="block text-[8px] tracking-[0.4em] text-white/60 font-mono uppercase">
                Rawalpindi
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = 
                (link.id === "home" && activeView === "home") || 
                (link.id === "services" && activeView === "services");

              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={`relative px-4 py-2 font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                    isActive 
                      ? "text-gold font-medium" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:03000000000"
              className="flex items-center gap-2 text-zinc-400 hover:text-gold font-mono text-xs transition-colors py-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>0300-0000000</span>
            </a>
            <button
              onClick={() => {
                setActiveView("home");
                setTimeout(() => scrollToSection("booking"), 150);
              }}
              className="px-6 py-2.5 border border-gold text-gold text-xs uppercase tracking-widest font-medium hover:bg-gold hover:text-black transition-all duration-300 rounded-sm active:scale-95"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-gold p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-gold/20 px-4 pt-4 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className="w-full text-left py-3 px-4 font-sans text-xs tracking-widest uppercase text-zinc-300 hover:text-gold hover:bg-[#1A1A1A]/60 transition-all rounded"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-[1px] bg-zinc-800/80 my-2" />
              <div className="flex flex-col gap-3 px-4 pt-2">
                <a
                  href="tel:03000000000"
                  className="flex items-center gap-2 text-zinc-300 hover:text-gold font-mono text-sm"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>0300-0000000</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveView("home");
                    setTimeout(() => scrollToSection("booking"), 150);
                  }}
                  className="w-full justify-center bg-gold hover:bg-gold-hover text-black font-sans text-xs font-semibold tracking-widest py-3 rounded-sm text-center uppercase flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
