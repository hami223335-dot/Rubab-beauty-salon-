import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Scissors, Sparkles, Crown, Heart, Check, HelpCircle, Phone, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA, SERVICE_CATEGORIES } from "../data/services";
import { ServiceItem } from "../types";

interface AdvancedServicesCatalogProps {
  onBackToHome: () => void;
  scrollToSection: (id: string) => void;
}

export default function AdvancedServicesCatalog({ onBackToHome, scrollToSection }: AdvancedServicesCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoriesWithAll = useMemo(() => {
    return [{ id: "all", name: "All Experiences", icon: "Compass", emoji: "💎" }, ...SERVICE_CATEGORIES];
  }, []);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "all") return SERVICES_DATA;
    return SERVICES_DATA.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Scissors":
        return <Scissors className="w-4 h-4" />;
      case "Crown":
        return <Crown className="w-4 h-4" />;
      case "Heart":
        return <Heart className="w-4 h-4" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-28 pb-24 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation / Back hook */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-white/5 bg-[#141414]/40 hover:bg-[#141414] text-zinc-400 hover:text-gold transition-all font-sans text-xs tracking-widest uppercase mb-12"
        >
          <ChevronLeft className="w-4 h-4 text-gold" />
          <span>Back to Home Lounge</span>
        </motion.button>

        {/* Dynamic Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3 animate-pulse">
            Jaynaan Salon Couture Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-light tracking-tight text-white mb-6 leading-tight">
            The Advanced <br />
            <span className="font-serif italic text-gradient bg-gradient-to-r from-amber-100 via-gold to-gold-hover bg-clip-text text-transparent font-normal">
              Service Suite
            </span>
          </h1>
          <p className="text-xs sm:text-base text-zinc-400 font-sans tracking-wide leading-relaxed font-light">
            An meticulous list of hair styling designs, clinical-grade facial wellness options, manicure pedicures, and signature grooming suites. Click any service below to request immediate bookings.
          </p>
        </div>

        {/* Expanded Filters Row */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-8 mb-12">
          {categoriesWithAll.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-sm font-sans text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-500 border ${
                  isActive
                    ? "text-black border-gold bg-gold font-semibold"
                    : "text-zinc-400 border-white/5 bg-[#141414]/50 hover:text-white hover:border-gold/30"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
                {cat.id !== "all" && getCategoryIcon(cat.icon)}
              </button>
            );
          })}
        </div>

        {/* Counter of shown items */}
        <div className="text-xs text-zinc-500 font-mono tracking-widest uppercase mb-8">
          Showing {filteredServices.length} Luxury Procedures
        </div>

        {/* Grid of full services */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: ServiceItem, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between p-6 rounded-sm bg-[#141414]/90 border border-white/5 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 overflow-hidden min-h-[460px]"
              >
                {/* Background Sparkle Effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold/0 via-transparent to-gold/0 group-hover:from-gold/2 group-hover:to-transparent transition-all duration-700 pointer-events-none" />
                
                <div>
                  {/* Luxury Image Section */}
                  <div className="relative aspect-16/10 rounded-sm overflow-hidden mb-6 border border-white/5">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Price Tag */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-sm bg-black/80 backdrop-blur-md border border-gold/30 font-mono text-xs text-gold font-semibold">
                      {service.price || "Contact Us"}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-sans text-lg font-semibold text-white tracking-wide group-hover:text-gold transition-colors duration-300">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  {service.benefits && service.benefits.length > 0 && (
                    <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                      <span className="block text-[10px] font-mono tracking-widest uppercase text-gold/70 mb-2">
                        Premium Highlights
                      </span>
                      {service.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                          <Check className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Book appointment button */}
                <button
                  onClick={() => {
                    onBackToHome();
                    // Scroll down to the booking form on homepage
                    setTimeout(() => scrollToSection("booking"), 150);
                  }}
                  className="w-full mt-6 bg-[#0A0A0A] hover:bg-gold text-zinc-300 hover:text-black font-sans text-xs font-semibold tracking-widest py-3.5 rounded-sm transition-all duration-300 uppercase flex items-center justify-center gap-2 border border-white/5 hover:border-gold"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {/* Glow border element */}
                <div className="absolute top-0 left-0 w-[1px] h-0 bg-gold group-hover:h-full transition-all duration-700 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[1px] h-0 bg-gold-hover group-hover:h-full transition-all duration-700 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer info box */}
        <div className="mt-20 border-t border-white/5 pt-10 text-center text-zinc-500 text-xs font-mono max-w-xl mx-auto space-y-4">
          <p>
            Starting rates are subject to change based on custom specifications and VIP hair architecture requests.
          </p>
          <p>
            Immediate consultations are available via telephone at <a href="tel:03000000000" className="text-gold hover:underline">0300-0000000</a>
          </p>
        </div>

      </div>
    </div>
  );
}
