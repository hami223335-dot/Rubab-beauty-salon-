import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ReviewItem } from "../types";

export default function Testimonials() {
  const reviews: ReviewItem[] = [
    {
      id: "rev-1",
      name: "Sarmad Ali",
      rating: 5,
      text: "The absolute best luxury beauty salon in Rawalpindi. The Bridal Package was spectacular—from the Janssen facial to the precision hair cut. My stylist was exceptionally professional.",
      service: "Bridal Package",
      date: "June 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "rev-2",
      name: "Zara Khan",
      rating: 5,
      text: "I booked their Thalgo Marine Facial and hair styling for my wedding event. My skin has never looked so luminous and photogenic. Truly a $10,000 international standard salon experience!",
      service: "Thalgo Facial & Hair Styling",
      date: "July 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "rev-3",
      name: "Hamza Malik",
      rating: 5,
      text: "Highly recommend the Royal Sandalwood Shave and beard trim. It feels incredibly relaxing with hot/cold towels and amazing argan oil conditioning. Outstanding hygiene standards.",
      service: "Master Artisan Beard Trim & Shave",
      date: "May 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "rev-4",
      name: "Mariam Shah",
      rating: 5,
      text: "I got the Royal Whitening Pedicure and a custom hair coloring. Absolutely fell in love with their chic gold-and-black theme and the complimentary organic beverages. 10 out of 10!",
      service: "Royal Whitening Pedicure",
      date: "April 2026",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80"
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3">
            Client Voices
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white mb-4">
            Distinguished <span className="font-serif italic text-gold">Reviews</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Carousel block */}
        <div className="relative p-8 sm:p-14 rounded-sm border border-white/5 bg-gradient-to-br from-[#141414]/90 to-[#0A0A0A]/90 shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[320px] flex flex-col justify-between">
          <div className="absolute top-6 left-6 text-gold/10 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1px]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[currentIdx].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 relative z-10"
            >
              {/* Star Rating indicators */}
              <div className="flex items-center gap-1">
                {[...Array(reviews[currentIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg text-zinc-200 font-sans tracking-wide leading-relaxed font-light italic">
                &ldquo;{reviews[currentIdx].text}&rdquo;
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={reviews[currentIdx].avatar}
                  alt={reviews[currentIdx].name}
                  className="w-12 h-12 rounded-full border border-gold/30 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-white tracking-wider uppercase">
                    {reviews[currentIdx].name}
                  </h4>
                  <p className="text-xs text-gold/80 font-mono tracking-widest mt-0.5 uppercase">
                    {reviews[currentIdx].service} • <span className="text-zinc-500">{reviews[currentIdx].date}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Left/Right navigation arrow buttons */}
          <div className="flex items-center justify-end gap-3 mt-8 relative z-20">
            <button
              onClick={handlePrev}
              className="p-2 text-zinc-400 hover:text-gold rounded-full border border-white/5 bg-[#141414]/40 hover:bg-[#141414] transition-all"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 text-zinc-400 hover:text-gold rounded-full border border-white/5 bg-[#141414]/40 hover:bg-[#141414] transition-all"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIdx === i ? "w-6 bg-gold" : "w-1.5 bg-white/10"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
