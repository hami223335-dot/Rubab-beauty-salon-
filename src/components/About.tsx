import { motion } from "motion/react";
import { Sparkles, Trophy, Shield, Star } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Trophy,
      title: "Master Artisans",
      desc: "Our stylists are internationally trained, crafting tailor-made visual alignments."
    },
    {
      icon: Shield,
      title: "Ultra-Premium Hygenic Standard",
      desc: "Pristine clinical autoclaving processes for every piece of metal equipment."
    },
    {
      icon: Sparkles,
      title: "Luxury Formulations",
      desc: "We exclusively leverage Thalgo, Janssen, and Dermalogica certified product lines."
    },
    {
      icon: Star,
      title: "Bespoke Comfort",
      desc: "An atmosphere designed for privacy, rich beverages, and peaceful self-care."
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Abstract Background Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text / Info */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block">
                The Legacy of Jaynaan
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white leading-tight">
                Crafting Elite Confidence <br />
                <span className="font-serif italic text-gold font-normal">
                  In Every Single Dimension
                </span>
              </h2>
              <div className="w-20 h-[1px] bg-gradient-to-r from-gold to-transparent mt-4" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed font-light"
            >
              Jaynaan Beauty Salon provides professional beauty, hair, makeup and grooming services with expert care, modern techniques and a premium customer experience.
            </motion.p>

            {/* In-depth Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-5 rounded-sm border border-zinc-900 bg-zinc-900/20 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-black transition-colors duration-300 text-gold">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual Image Montage */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-4/5 w-full rounded-sm overflow-hidden border border-gold/20 bg-zinc-900"
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="Jaynaan Luxury Salon Interior"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              
              {/* Overlay Glass Box */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-sm bg-[#0A0A0A]/85 backdrop-blur-md border border-gold/20 text-center">
                <p className="font-serif italic text-gold text-lg mb-1">
                  &ldquo;Confidence begins here.&rdquo;
                </p>
                <p className="font-mono text-[9px] tracking-[0.2em] text-zinc-400 uppercase">
                  Jaynaan Rawalpindi
                </p>
              </div>
            </motion.div>

            {/* Decorative Offset Gold Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/10 rounded-sm pointer-events-none -z-10 translate-x-2 translate-y-2" />
          </div>

        </div>
      </div>
    </section>
  );
}
