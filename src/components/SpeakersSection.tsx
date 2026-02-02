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

const speakers = [
  {
    name: "Alamine Ousmane Mey",
    role: "Parrain du Forum",
    title: "Ministre de l'Économie",
    country: "Cameroun",
    image: speakerAlamine,
  },
  {
    name: "Achille Bassilekin III",
    role: "Invité d'honneur",
    title: "Ministre des PME",
    country: "Cameroun",
    image: speakerAchille,
  },
  {
    name: "Dieudonné Evou Mekou",
    role: "Intervenant principal",
    title: "Président de la BDEAC",
    country: "Afrique Centrale",
    image: speakerDieudonne,
  },
  {
    name: "Jean Baptiste Fouda",
    role: "Président du Forum",
    title: "Président FEAC",
    country: "Cameroun",
    image: speakerFouda,
  },
  {
    name: "Debora Ngo Tonye",
    role: "Commissaire Général",
    title: "Commissaire général",
    country: "Cameroun",
    image: speakerDebora,
  },
  {
    name: "Dr Maximilien Emagna",
    role: "Comité Scientifique",
    title: "DG Audace",
    country: "Cameroun",
    image: speakerEmagna,
  },
];

// Heights for staggered effect (creative portfolio style)
const heights = ["h-64", "h-80", "h-72", "h-96", "h-68", "h-76"];

export function SpeakersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-foreground tracking-tight">
              Intervenants
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm text-muted-foreground font-inter">Leaders & Décideurs</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground font-inter">FEAC 2026</span>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
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
          </motion.div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:-mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {speakers.map((speaker, index) => {
            // Staggered heights for visual interest
            const heightClass = index % 2 === 0 
              ? (index === 0 ? "h-72" : index === 2 ? "h-96" : "h-80")
              : (index === 1 ? "h-80" : index === 3 ? "h-72" : "h-88");
            
            return (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="flex-shrink-0 snap-start group cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                style={{ width: index === activeIndex ? '280px' : '140px' }}
              >
                <div 
                  className={`relative w-full rounded-2xl overflow-hidden transition-all duration-500 ${
                    index === activeIndex ? 'h-96' : heightClass
                  }`}
                >
                  {/* Image */}
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeIndex 
                      ? 'bg-gradient-to-t from-navy via-navy/40 to-transparent' 
                      : 'bg-gradient-to-t from-navy/60 to-transparent'
                  }`} />

                  {/* Content - Only visible on active/hovered card */}
                  <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ${
                    index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <span className="inline-block px-2 py-1 rounded bg-gold/90 text-navy text-xs font-montserrat font-bold mb-2">
                      {speaker.role}
                    </span>
                    <h3 className="text-lg font-montserrat font-bold text-primary-foreground leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-primary-foreground/70 font-inter mt-1">
                      {speaker.title} · {speaker.country}
                    </p>
                  </div>

                  {/* Minimal info for non-active cards */}
                  <div className={`absolute bottom-4 left-0 right-0 px-3 transition-all duration-500 ${
                    index === activeIndex ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <p className="text-xs font-montserrat font-semibold text-primary-foreground text-center leading-tight" 
                       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', margin: '0 auto' }}>
                      {speaker.name.split(' ')[0]}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground font-inter">
            Décideurs politiques, experts économiques et leaders d'opinion réunis pour façonner l'avenir économique de l'Afrique centrale.
          </p>
          <div className="flex items-center gap-2">
            {speakers.map((_, i) => (
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
