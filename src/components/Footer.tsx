import { Scissors, MapPin, Phone, Mail, Instagram, Facebook, Share2 } from "lucide-react";

interface FooterProps {
  setActiveView: (view: "home" | "services") => void;
  scrollToSection: (id: string) => void;
}

export default function Footer({ setActiveView, scrollToSection }: FooterProps) {
  
  const handleLink = (id: string, isView: boolean = false) => {
    if (isView) {
      setActiveView(id as "home" | "services");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveView("home");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 text-zinc-400 font-sans py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative vertical bounds */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-black/40">
                <Scissors className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="font-sans text-xl font-bold tracking-[0.2em] text-white uppercase block">
                  Jaynaan
                </span>
                <span className="block text-[8px] tracking-[0.4em] text-gold/80 font-mono uppercase">
                  Rawalpindi
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed font-light max-w-sm">
              &ldquo;Be The Best Version Of Yourself&rdquo;. Jaynaan Beauty Salon provides premium beauty, hair, makeup and grooming services with expert care and modern techniques in Rawalpindi.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold/40 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold/40 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-sm bg-[#141414] border border-white/5 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold/40 transition-colors" aria-label="TikTok">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white border-l-2 border-gold pl-3">
              Lounge Navigation
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <button onClick={() => handleLink("home", true)} className="hover:text-gold transition-colors uppercase tracking-widest block text-left">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleLink("about")} className="hover:text-gold transition-colors uppercase tracking-widest block text-left">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => handleLink("services-preview")} className="hover:text-gold transition-colors uppercase tracking-widest block text-left">
                  Signature Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLink("services", true)} className="hover:text-gold transition-colors uppercase tracking-widest block text-left">
                  Advanced Services Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleLink("packages")} className="hover:text-gold transition-colors uppercase tracking-widest block text-left">
                  Luxury Packages
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white border-l-2 border-gold pl-3">
              Contact Concierge
            </h4>
            <ul className="space-y-4 text-xs font-light tracking-wide text-zinc-300">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Plot 23, Main Boulevard, Phase 7,<br />
                  Bahria Town, Rawalpindi, Pakistan 46000
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:03000000000" className="hover:text-gold transition-colors font-mono text-sm font-semibold">
                  0300-0000000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:concierge@jaynaansalon.com" className="hover:text-gold transition-colors">
                  concierge@jaynaansalon.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
          <p>
            © {new Date().getFullYear()} JAYNAAN BEAUTY SALON RAWALPINDI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Safety Standard</a>
            <a href="#" className="hover:text-gold transition-colors">Privacy Charter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
