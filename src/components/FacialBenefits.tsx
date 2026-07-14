import { motion } from "motion/react";
import { Sparkles, Compass, Shield, Leaf, CheckCircle2 } from "lucide-react";

export default function FacialBenefits() {
  const brands = [
    {
      name: "Thalgo Marine Facial",
      origin: "France",
      themeColor: "from-blue-950/20 via-black to-black",
      accentBorder: "border-blue-900/20 group-hover:border-blue-500/40",
      icon: Compass,
      iconColor: "text-blue-400",
      tagline: "Active Marine Biological Science",
      desc: "Harvesting the power of micro-ionized algae and mineral extracts from deep oceanic basins to fully re-mineralize the epidermis.",
      benefits: [
        "Deep Marine Hydration",
        "Detoxifies And Purifies Skin",
        "Balances Sebum & Oil Production",
        "Boosts Organic Luminous Radiance"
      ]
    },
    {
      name: "Janssen Facial Clinic",
      origin: "Germany",
      themeColor: "from-gold/5 via-black to-black",
      accentBorder: "border-gold/20 group-hover:border-gold",
      icon: Shield,
      iconColor: "text-gold",
      tagline: "High-Performance Medical Aesthetics",
      desc: "German engineered cosmetic formulas containing active biological peptides to penetrate cellular barriers and tackle dark pigment.",
      benefits: [
        "Intensive Deep Hydration Lock",
        "Advanced Sebum & Oil Control",
        "Instantly Brightens Dull Skin",
        "Anti Aging Cellular Boost"
      ]
    },
    {
      name: "Conatural Organic Facial",
      origin: "Pakistan (Organic Cert)",
      themeColor: "from-emerald-950/20 via-black to-black",
      accentBorder: "border-emerald-900/20 group-hover:border-emerald-500/40",
      icon: Leaf,
      iconColor: "text-emerald-400",
      tagline: "Pure Premium Organic Botanical Wellness",
      desc: "Sourced with pristine plant-based nutrients and soothing cold-pressed essential oils, perfect for delicate or stressed skin profiles.",
      benefits: [
        "Brightens Skin Complexion Naturally",
        "Soothes Dermal Irritation & Redness",
        "Deep Plant-Derived Hydration",
        "Detoxifies Skin Toxins Safely"
      ]
    }
  ];

  return (
    <section id="facial-benefits" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Visual background lines */}
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-1/3 w-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3">
            Dermal Science Lounge
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white mb-4">
            Elite Skincare <span className="font-serif italic text-gold">Benefits</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed font-light">
            We do not compromise. Jaynaan Beauty Salon partners with international labs to deliver tested skin results that last.
          </p>
        </div>

        {/* Brands comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => {
            const BrandIcon = brand.icon;
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative rounded-sm p-8 sm:p-10 border bg-gradient-to-b ${brand.themeColor} ${brand.accentBorder} transition-all duration-500 group flex flex-col justify-between`}
              >
                <div>
                  {/* Origin Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[9px] tracking-widest uppercase text-zinc-500">
                      Sourced From {brand.origin}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-zinc-900/80 flex items-center justify-center border border-white/5 ${brand.iconColor}`}>
                      <BrandIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Name and Tagline */}
                  <h3 className="text-xl sm:text-2xl font-sans font-light text-white tracking-wide mb-1">
                    {brand.name}
                  </h3>
                  <span className="block text-[10px] font-mono tracking-widest uppercase text-gold/80 mb-6">
                    {brand.tagline}
                  </span>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-8 border-b border-white/5 pb-6">
                    {brand.desc}
                  </p>

                  {/* Benefits checklist */}
                  <div className="space-y-4">
                    <span className="block text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                      Dermal Inclusions
                    </span>
                    <ul className="space-y-3">
                      {brand.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 font-light">
                          <CheckCircle2 className={`w-4.5 h-4.5 ${brand.iconColor} flex-shrink-0`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Micro gold particle line decoration on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-full transition-all duration-700 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Floating science notice banner */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-sm border border-white/5 bg-[#141414]/40">
          <p className="text-[11px] text-zinc-400 font-mono tracking-wider flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Every facial includes complimentary deep cleansing & pore refinement scaling.
          </p>
        </div>

      </div>
    </section>
  );
}
