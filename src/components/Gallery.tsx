import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Compass } from "lucide-react";

interface GalleryItem {
  id: string;
  category: "interior" | "hair" | "skin" | "grooming";
  title: string;
  image: string;
  spanClass?: string;
}

export default function Gallery() {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const galleryImages: GalleryItem[] = [
    {
      id: "gal-1",
      category: "interior",
      title: "Presidential Styling Suite",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-2 md:row-span-2"
    },
    {
      id: "gal-2",
      category: "hair",
      title: "Dimensional Blonde Balayage",
      image: "https://images.unsplash.com/photo-1605497746444-ac9dbd39f4a5?auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-1 md:row-span-1"
    },
    {
      id: "gal-3",
      category: "skin",
      title: "Deep Sea Hydra Facial Active",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-1 md:row-span-2"
    },
    {
      id: "gal-4",
      category: "grooming",
      title: "Precision Hot Towel Shaving",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-1 md:row-span-1"
    },
    {
      id: "gal-5",
      category: "interior",
      title: "VIP Lounge Area & Reception",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-1 md:row-span-1"
    },
    {
      id: "gal-6",
      category: "hair",
      title: "Couture Hair-Do & Event Styling",
      image: "https://images.unsplash.com/photo-1595475243688-aa924f7943f7?auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-2 md:row-span-1"
    }
  ];

  const filteredImages = galleryImages.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  const tabs = [
    { id: "all", name: "Show All" },
    { id: "interior", name: "Salon Interior" },
    { id: "hair", name: "Hair Couture" },
    { id: "skin", name: "Dermal Skincare" },
    { id: "grooming", name: "Elite Grooming" }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    const nextIdx = (selectedImageIdx + 1) % filteredImages.length;
    setSelectedImageIdx(nextIdx);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    const prevIdx = (selectedImageIdx - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImageIdx(prevIdx);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gold font-semibold block mb-3">
            Visual Portfolios
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-light tracking-tight text-white mb-4">
            The Jaynaan <span className="font-serif italic text-gold">Gallery</span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-4" />
          <p className="text-xs sm:text-sm text-zinc-400 font-sans tracking-wide leading-relaxed font-light">
            Step inside our world of meticulous transformations and premium aesthetic craftsmanship.
          </p>
        </div>

        {/* Gallery Navigation tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedImageIdx(null);
                }}
                className={`px-5 py-2.5 rounded-sm font-sans text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-300 border ${
                  isActive
                    ? "text-black border-gold bg-gold font-semibold"
                    : "text-zinc-400 border-white/5 bg-[#141414]/40 hover:text-white hover:border-gold/30"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Masonry-Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImageIdx(index)}
                className={`group relative rounded-sm overflow-hidden border border-white/5 bg-[#141414] cursor-pointer ${
                  item.spanClass || ""
                }`}
              >
                {/* Gallery image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <span className="font-mono text-[9px] tracking-widest uppercase text-gold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-sans text-sm sm:text-base font-medium text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gold/30 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIdx(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
            >
              <button
                onClick={() => setSelectedImageIdx(null)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2.5 rounded-full border border-white/5 bg-[#141414]/60 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-6 text-zinc-400 hover:text-gold p-3 rounded-full border border-white/5 bg-black/40 hover:bg-black/80 transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Lightbox Main Image Box */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl max-h-[80vh] relative flex flex-col items-center bg-[#0A0A0A] border border-white/5 p-1.5"
              >
                <img
                  src={filteredImages[selectedImageIdx].image}
                  alt={filteredImages[selectedImageIdx].title}
                  className="max-w-full max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
                
                {/* Information Card beneath expanded image */}
                <div className="w-full bg-black p-4 sm:p-6 text-center">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gold block mb-1">
                    {filteredImages[selectedImageIdx].category}
                  </span>
                  <h4 className="font-sans text-base sm:text-lg font-light tracking-wide text-white">
                    {filteredImages[selectedImageIdx].title}
                  </h4>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-6 text-zinc-400 hover:text-gold p-3 rounded-full border border-white/5 bg-black/40 hover:bg-black/80 transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
