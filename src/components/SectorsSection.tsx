import { motion } from "framer-motion";
import { Wheat, Zap, Ship, Laptop, ChevronRight } from "lucide-react";

// Sector images
import sectorAgriculture from "@/assets/sector-agriculture.jpg";
import sectorEnergy from "@/assets/sector-energy.jpg";
import sectorTransport from "@/assets/sector-transport.jpg";
import sectorDigital from "@/assets/sector-digital.jpg";

const sectors = [
  {
    icon: Wheat,
    title: "Agro-processing & Sécurité Alimentaire",
    highlights: [
      "120 millions d'hectares arables",
      "Focus sur AgriTech et valeur ajoutée locale",
      "Agriculture biologique et durable",
    ],
    description: "Transformation locale pour répondre à une demande croissante domestique et continentale.",
    image: sectorAgriculture,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Énergie & Ressources Naturelles",
    highlights: [
      "60% des réserves mondiales de Cobalt",
      "35% des réserves mondiales de Manganèse",
      "25% des réserves mondiales de Diamant",
    ],
    description: "Potentiel de doubler la capacité électrique d'ici 2030 grâce à la valorisation du gaz.",
    image: sectorEnergy,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Ship,
    title: "Transports & Logistique",
    highlights: [
      "Connexion Ouest, Nord, Est et Sud Afrique",
      "Corridors routiers et ferroviaires",
      "Infrastructures portuaires stratégiques",
    ],
    description: "Position géographique stratégique connectant toutes les régions africaines.",
    image: sectorTransport,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Laptop,
    title: "Économie Numérique",
    highlights: [
      "Investissement TIC croissant",
      "Inclusion digitale",
      "E-commerce et paiements numériques",
    ],
    description: "Opportunités d'investissement dans les technologies de l'information.",
    image: sectorDigital,
    gradient: "from-violet-500 to-purple-600",
  },
];

export function SectorsSection() {
  return (
    <section id="sectors" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-forest/10 text-forest font-montserrat font-semibold text-sm mb-4">
            SECTEURS STRATÉGIQUES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-foreground mb-4">
            Richesses Naturelles
            <br />
            <span className="text-gradient-gold">Exceptionnelles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            Les secteurs moteurs de la transformation économique en Afrique centrale, offrant des opportunités d'investissement majeures.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
              </div>

              {/* Content */}
              <div className="relative p-8 min-h-[400px] flex flex-col justify-end">
                {/* Icon */}
                <div className="sector-card-icon mb-6">
                  <sector.icon className="w-8 h-8 text-navy" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-montserrat font-bold text-primary-foreground mb-3">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-primary-foreground/80 font-inter mb-5 text-sm">
                  {sector.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {sector.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-sm font-inter text-primary-foreground/90"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gold font-montserrat font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  En savoir plus
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
