import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Speaker photos
import speakerAlamine from "@/assets/speaker-alamine.jpg";
import speakerAchille from "@/assets/speaker-achille.jpg";
import speakerDieudonne from "@/assets/speaker-dieudonne.jpg";
import speakerFouda from "@/assets/speaker-fouda.jpg";
import speakerDebora from "@/assets/speaker-debora.jpg";
import speakerEmagna from "@/assets/speaker-emagna.jpg";

interface Speaker {
  name: string;
  role: string;
  title: string;
  country: string;
  image: string;
}

interface CategoryData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  speakers: Speaker[];
}

const categoriesData: CategoryData[] = [
  {
    id: "intervenants",
    title: "Intervenants",
    subtitle: "Leaders & Décideurs",
    description: "Décideurs politiques, experts économiques et leaders d'opinion réunis pour façonner l'avenir économique de l'Afrique centrale.",
    speakers: [
      {
        name: "Alamine Ousmane Mey",
        role: "Parrain du Forum",
        title: "Ministre de l'Économie, de la Planification et de l'Aménagement du Territoire",
        country: "Cameroun",
        image: speakerAlamine,
      },
      {
        name: "Achille Bassilekin III",
        role: "Invité d'honneur",
        title: "Ministre des PME, de l'Économie Sociale et de l'Artisanat",
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
    ],
  },
  {
    id: "comite",
    title: "Comité d'organisation",
    subtitle: "Équipe organisatrice",
    description: "L'équipe organisatrice dédiée à la réussite du Forum Économique de l'Afrique Centrale.",
    speakers: [
      {
        name: "Jean Baptiste Fouda",
        role: "Président du Forum",
        title: "Président du Forum Économique Afrique Centrale",
        country: "Cameroun",
        image: speakerFouda,
      },
      {
        name: "Debora Ngo Tonye",
        role: "Commissaire Général",
        title: "Commissaire général du Forum - DG Audace",
        country: "Cameroun",
        image: speakerDebora,
      },
      {
        name: "Dr Maximilien Emagna",
        role: "Comité Scientifique",
        title: "Président du comité scientifique - Fondateur PME Afrique Centrale",
        country: "Cameroun",
        image: speakerEmagna,
      },
    ],
  },
  {
    id: "points-focaux",
    title: "Points Focaux",
    subtitle: "Représentants régionaux",
    description: "Nos points focaux représentent le FEAC à travers l'Europe, le Canada, le Maghreb et l'Afrique.",
    speakers: [
      {
        name: "Freddy Zanga",
        role: "Point Focal Europe",
        title: "Consultant PDG du groupe CICR",
        country: "Europe",
        image: speakerAlamine,
      },
      {
        name: "Raymond Kashiba",
        role: "Point Focal Canada",
        title: "PDG du CCRCC - Fondateur Forum Congo-Canada",
        country: "Canada",
        image: speakerAchille,
      },
      {
        name: "Ferjani Jamel",
        role: "Point Focal Congo & Maghreb",
        title: "DG Eva Événement et communication INC",
        country: "Congo Brazzaville",
        image: speakerDieudonne,
      },
    ],
  },
];

function SpeakerCarousel({ speakers }: { speakers: Speaker[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border border-border bg-background hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 flex items-center justify-center group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full border border-border bg-background hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 flex items-center justify-center group"
        >
          <ChevronRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Speakers */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:-mx-0 md:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {speakers.map((speaker, index) => (
          <motion.div
            key={speaker.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * index }}
            className="flex-shrink-0 snap-start group cursor-pointer w-56"
          >
            <div className="relative w-full h-72 rounded-2xl overflow-hidden">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
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
      </div>
    </div>
  );
}

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 md:py-32 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative space-y-8">
        {categoriesData.map((category, catIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
          >
            {/* Category Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-sm text-gold font-montserrat font-semibold uppercase tracking-wider">
                  {category.subtitle}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-black text-foreground tracking-tight mb-3">
                {category.title}
              </h2>
              <p className="text-muted-foreground font-inter max-w-2xl">
                {category.description}
              </p>
            </div>

            {/* Speakers Carousel */}
            <SpeakerCarousel speakers={category.speakers} />

            {/* Divider (except for last category) */}
            {catIndex < categoriesData.length - 1 && (
              <div className="mt-6 border-b border-border/50" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
