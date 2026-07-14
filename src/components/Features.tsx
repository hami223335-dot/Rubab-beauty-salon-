import { motion } from "motion/react";
import { 
  Check, 
  Accessibility, 
  Car, 
  Scissors, 
  Coffee, 
  Users, 
  User, 
  Wifi, 
  Calendar, 
  Sparkles, 
  CreditCard, 
  Wallet, 
  Smartphone, 
  Smile, 
  CircleDollarSign
} from "lucide-react";

interface FeatureDetail {
  name: string;
  desc: string;
  icon: any;
}

export default function Features() {
  const businessFeatures: FeatureDetail[] = [
    { name: "Wheelchair Accessible Entrance", desc: "Easy access ramp at our main entrance", icon: Accessibility },
    { name: "Wheelchair Accessible Parking", desc: "Dedicated spaces in lower lot", icon: Car },
    { name: "Onsite Premium Services", desc: "Fully equipped luxury stations", icon: Scissors },
    { name: "Beverages Available", desc: "Complimentary green teas & coffees", icon: Coffee },
    { name: "Gender-Neutral Restroom", desc: "Pristine private single-use spaces", icon: Users },
    { name: "Restroom", desc: "Equipped with luxury organic handwashes", icon: User },
    { name: "Free High-Speed WiFi", desc: "Stay connected while getting styled", icon: Wifi },
    { name: "Appointments Recommended", desc: "Secure preferred time slots seamlessly", icon: Calendar },
    { name: "Walk-ins Welcome", desc: "Admitted based on artisan availability", icon: Sparkles },
    { name: "Credit Cards Accepted", desc: "Visa, MasterCard global terminals", icon: CreditCard },
    { name: "Debit Cards Accepted", desc: "Convenient direct checkout options", icon: Wallet },
    { name: "NFC Contactless Payments", desc: "Apple Pay, Google Pay, tap to pay", icon: Smartphone },
    { name: "Good For Kids", desc: "Special gentle child haircut packages", icon: Smile },
    { name: "Free Parking", desc: "Generous markaz parking facilities", icon: CircleDollarSign }
  ];

  return (
    <section id="features" className="relative py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3">
            Amenities & Comforts
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-light tracking-tight text-white mb-4">
            Elite Salon <span className="font-serif italic text-gold">Conveniences</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold/35 mx-auto mt-3" />
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {businessFeatures.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group relative p-5 rounded-sm bg-[#141414]/30 border border-white/5 hover:border-gold/30 hover:bg-[#141414]/50 transition-all duration-300 flex items-start gap-4"
              >
                {/* Icon box */}
                <div className="w-10 h-10 rounded-sm bg-black border border-white/5 text-gold flex items-center justify-center flex-shrink-0 group-hover:text-black group-hover:bg-gold transition-all duration-300">
                  <FeatureIcon className="w-4.5 h-4.5" />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="text-xs font-semibold text-white tracking-wider uppercase group-hover:text-gold transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Micro gold tick on hover */}
                <div className="absolute top-3 right-3 text-gold/10 group-hover:text-gold transition-colors pointer-events-none">
                  <Check className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
