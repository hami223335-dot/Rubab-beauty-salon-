import { ServiceItem, ServiceCategory } from "../types";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "hair", name: "Hair Services", icon: "Scissors", emoji: "✂️" },
  { id: "beauty", name: "Beauty Services", icon: "Sparkles", emoji: "✨" }
];

export const SERVICES_DATA: ServiceItem[] = [
  // --- HAIR SERVICES ---
  {
    id: "hair-cut",
    category: "hair",
    name: "Hair Cut",
    description: "Signature bespoke haircut styling designed around your face structure, hair texture, and refined aesthetic.",
    price: "Rs. 3,500",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    benefits: ["Face shape analysis", "Sleek blow-dry included", "Luxury scalp massage"]
  },
  {
    id: "hair-styling",
    category: "hair",
    name: "Hair Styling",
    description: "Modern, dynamic blowouts, classic waves, or intricate party hair-dos for ultimate elegance.",
    price: "Rs. 2,500",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    benefits: ["Anti-humidity volume lock", "Signature thermal protection", "Long-lasting holds"]
  },
  {
    id: "hair-coloring",
    category: "hair",
    name: "Hair Coloring",
    description: "Artisanal highlighting, balayage, or full color transformations using premium damage-free colors.",
    price: "Rs. 12,000",
    image: "https://images.unsplash.com/photo-1605497746444-ac9dbd39f4a5?auto=format&fit=crop&w=600&q=80",
    benefits: ["Custom skin-tone pairing", "Keratin color protection", "Rich multi-dimensional luster"]
  },
  {
    id: "hair-treatment",
    category: "hair",
    name: "Hair Treatment",
    description: "Advanced Olaplex and molecular repair treatments to rebuild dry or chemically-treated hair.",
    price: "Rs. 8,000",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80",
    benefits: ["Reconstructs broken disulfide bonds", "Restores elasticity & bounce", "Thermal heat barrier defense"]
  },
  {
    id: "hair-spa",
    category: "hair",
    name: "Hair Spa",
    description: "Deep conditioning steam bath, rich essential oil mask, and restorative head massage.",
    price: "Rs. 5,000",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    benefits: ["Soothes scalp irritation", "Deep hair cuticle nourishment", "Stress-relieving acupressure"]
  },
  {
    id: "keratin-treatment",
    category: "hair",
    name: "Keratin Treatment",
    description: "Professional amino acid smoothing treatment to eliminate frizz and provide a long-lasting glass-like shine.",
    price: "Rs. 18,000",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    benefits: ["Zero frizz for up to 5 months", "Drastically cuts blow-dry time", "Intense cuticle sealing"]
  },
  {
    id: "bridal-hair-styling",
    category: "hair",
    name: "Bridal Hair Styling",
    description: "Royal signature updos, sleek vintage waves, or custom floral extensions for your special occasions.",
    price: "Rs. 10,000",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    benefits: ["Extended duration hold formulation", "Dupatta & jewelry settings", "VIP hair accessory styling"]
  },

  // --- BEAUTY SERVICES ---
  {
    id: "facial-treatments",
    category: "beauty",
    name: "Facial Treatments",
    description: "Elite Janssen German brightening facials and Thalgo Marine hydration treatments for absolute cellular glow.",
    price: "Rs. 8,500",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    benefits: ["Deep marine micro-exfoliation", "Antioxidant cellular detoxification", "Targeted pigmentation reduction"]
  },
  {
    id: "skin-care",
    category: "beauty",
    name: "Skin Care",
    description: "Clinical skin cleansing, organic polisher sessions, and barrier-repairing moisture locking routines.",
    price: "Rs. 5,000",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    benefits: ["Ultrasonic sebum scaling", "Custom botanical skin polisher", "Hyaluronic moisture mist layer"]
  },
  {
    id: "makeup-services",
    category: "beauty",
    name: "Makeup Services",
    description: "Flawless HD makeup styling for elite evening parties, engagements, and formal gatherings.",
    price: "Rs. 12,000",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
    benefits: ["Photography-friendly HD base", "Symmetric highlight & contouring", "Eyelashes application included"]
  },
  {
    id: "bridal-makeup",
    category: "beauty",
    name: "Bridal Makeup",
    description: "Signature ultra-premium bridal look with standard-setting products, airbrush option, and personalized face contouring.",
    price: "Rs. 30,000",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    benefits: ["Waterproof & anti-sweat lock", "Pre-event skin prep treatment", "Private VIP bridal suite access"]
  },
  {
    id: "manicure",
    category: "beauty",
    name: "Manicure",
    description: "Complete hand whitening treatment, exfoliating luxury scrub, cuticle care, and massage.",
    price: "Rs. 3,000",
    image: "https://images.unsplash.com/photo-1604654894610-df49068873ae?auto=format&fit=crop&w=600&q=80",
    benefits: ["Fades dark knuckle circles", "Moisturizes dry hand skin", "High-gloss protective buffing"]
  },
  {
    id: "pedicure",
    category: "beauty",
    name: "Pedicure",
    description: "Therapeutic mineral foot soak, advanced heel filing, herbal scrubbing, and comforting reflexology.",
    price: "Rs. 4,000",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=600&q=80",
    benefits: ["Deep cracked heel softening", "Reflexology calf relaxation", "Sterilizes nail beds and cuticles"]
  },
  {
    id: "grooming-services",
    category: "beauty",
    name: "Grooming Services",
    description: "Custom premium facial threading, eyebrow architecture, waxing, and total body glow polishers.",
    price: "Rs. 3,500",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    benefits: ["Smooth non-irritant threading", "Precision brow symmetry framing", "Calming botanical after-balm"]
  }
];
