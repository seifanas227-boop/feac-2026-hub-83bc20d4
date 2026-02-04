import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Speaker photos
import speakerAlamine from "@/assets/speaker-alamine.jpg";
import speakerAchille from "@/assets/speaker-achille.jpg";
import speakerDieudonne from "@/assets/speaker-dieudonne.jpg";
import speakerFouda from "@/assets/speaker-fouda.jpg";
import speakerDebora from "@/assets/speaker-debora.jpg";
import speakerEmagna from "@/assets/speaker-emagna.jpg";

type Category = "intervenants" | "comite" | "ambassadeurs";

interface Speaker {
  name: string;
  role: string;
  title: string;
  country: string;
  image: string;
  category: Category;
}

const speakers: Speaker[] = [
  // Intervenants
  {
    name: "Alamine Ousmane Mey",
    role: "Parrain du Forum",
    title: "Ministre de l'Économie, de la Planification et de l'Aménagement du Territoire",
    country: "Cameroun",
    image: speakerAlamine,
    category: "intervenants",
  },
  {
    name: "Achille Bassilekin III",
    role: "Invité d'honneur",
    title: "Ministre des PME, de l'Économie Sociale et de l'Artisanat",
    country: "Cameroun",
    image: speakerAchille,
    category: "intervenants",
  },
  {
    name: "Dieudonné Evou Mekou",
    role: "Intervenant principal",
    title: "Président de la BDEAC",
    country: "Afrique Centrale",
    image: speakerDieudonne,
    category: "intervenants",
  },
  // Comité d'organisation
  {
    name: "Jean Baptiste Fouda",
    role: "Président du Forum",
    title: "Président du Forum Économique Afrique Centrale",
    country: "Cameroun",
    image: speakerFouda,
    category: "comite",
  },
  {
    name: "Debora Ngo Tonye",
    role: "Commissaire Général",
    title: "Commissaire général du Forum - DG Audace",
    country: "Cameroun",
    image: speakerDebora,
    category: "comite",
  },
  {
    name: "Dr Maximilien Emagna",
    role: "Comité Scientifique",
    title: "Président du comité scientifique - Fondateur PME Afrique Centrale",
    country: "Cameroun",
    image: speakerEmagna,
    category: "comite",
  },
  // Ambassadeurs / Points Focaux
  {
    name: "Freddy Zanga",
    role: "Point Focal Europe",
    title: "Consultant PDG du groupe CICR",
    country: "Europe",
    image: speakerAlamine,
    category: "ambassadeurs",
  },
  {
    name: "Raymond Kashiba",
    role: "Point Focal Canada",
    title: "PDG du CCRCC - Fondateur Forum Congo-Canada",
    country: "Canada",
    image: speakerAchille,
    category: "ambassadeurs",
  },
  {
    name: "Ferjani Jamel",
    role: "Point Focal Congo & Maghreb",
    title: "DG Eva Événement et communication INC",
    country: "Congo Brazzaville",
    image: speakerDieudonne,
    category: "ambassadeurs",
  },
];

const categories = [
  { id: "intervenants" as Category, label: "Intervenants", subtitle: "Leaders & Décideurs" },
  { id: "comite" as Category, label: "Comité d'organisation", subtitle: "Équipe organisatrice" },
  { id: "ambassadeurs" as Category, label: "Points Focaux", subtitle: "Représentants régionaux" },
];

export function SpeakersSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("intervenants");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredSpeakers = speakers.filter((s) => s.category === activeCategory);
  const currentSubtitle = categories.find((c) => c.id === activeCategory)?.subtitle || "";

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setActiveIndex(0);
    // Reset scroll position
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="speakers" className="py-24 md:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-foreground tracking-tight">
            Intervenants
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2.5 rounded-full font-montserrat font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gold text-navy shadow-lg shadow-gold/25"
                  : "bg-background border border-border text-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Subtitle and Navigation Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-4"
          >
            <span className="text-sm text-muted-foreground font-inter">{currentSubtitle}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground font-inter">FEAC 2026</span>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border bg-background hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border bg-background hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:-mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="flex-shrink-0 snap-start group cursor-pointer w-56"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                {/* Image */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                  
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-1 rounded bg-gold/90 text-navy text-xs font-montserrat font-bold mb-2">
                    {speaker.role}
                  </span>
                  <h3 className="text-base font-montserrat font-bold text-primary-foreground leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-primary-foreground/70 font-inter mt-1">
                    {speaker.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground font-inter">
            {activeCategory === "intervenants" && "Décideurs politiques, experts économiques et leaders d'opinion réunis pour façonner l'avenir économique de l'Afrique centrale."}
            {activeCategory === "comite" && "L'équipe organisatrice dédiée à la réussite du Forum Économique de l'Afrique Centrale."}
            {activeCategory === "ambassadeurs" && "Nos points focaux représentent le FEAC à travers l'Europe, le Canada, le Maghreb et l'Afrique."}
          </p>
          <div className="flex items-center gap-2">
            {filteredSpeakers.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-gold' : 'bg-border hover:bg-gold/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
