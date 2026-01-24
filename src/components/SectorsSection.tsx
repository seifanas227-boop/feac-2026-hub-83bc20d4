import { motion } from "framer-motion";
import { Wheat, Zap, Ship, Laptop, ChevronRight } from "lucide-react";

const sectors = [
  {
    icon: Wheat,
    title: "Agro-processing & Sécurité Alimentaire",
    highlights: [
      "120 millions d'hectares arables",
      "Potentiel agriculture biologique",
      "Opportunités AgriTech",
    ],
    description: "Transformation locale pour répondre à une demande croissante domestique et continentale. Amélioration de la valeur ajoutée dans les filières agricoles.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Énergie & Ressources Naturelles",
    highlights: [
      "60% réserves mondiales Cobalt",
      "35% réserves mondiales Manganèse",
      "25% réserves mondiales Diamant",
    ],
    description: "Développement d'un mix énergétique durable : gaz, énergies renouvelables, exploitation gérée des ressources minières.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Ship,
    title: "Transports & Logistique",
    highlights: [
      "Corridors routiers et ferroviaires",
      "Infrastructures portuaires",
      "Position géographique stratégique",
    ],
    description: "Connectivité de l'Afrique de l'Ouest, du Nord, de l'Est et Australe. Opportunités pour le transport, les ports et les infrastructures TIC.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Laptop,
    title: "Économie Numérique",
    highlights: [
      "Secteur en pleine croissance",
      "Investissement TIC",
      "Inclusion digitale",
    ],
    description: "Opportunités d'investissement dans les technologies de l'information. Services, paiements et commerce électronique facilités.",
    gradient: "from-violet-500 to-purple-600",
  },
];

export function SectorsSection() {
  return (
    <section id="sectors" className="section-padding bg-background relative overflow-hidden">
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
              className="sector-card group"
            >
              {/* Icon */}
              <div className="sector-card-icon">
                <sector.icon className="w-8 h-8 text-navy" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-montserrat font-bold text-foreground mb-4 group-hover:text-forest transition-colors">
                {sector.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-inter mb-6">
                {sector.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-6">
                {sector.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 text-sm font-inter text-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-forest font-montserrat font-semibold text-sm group-hover:text-gold transition-colors"
              >
                En savoir plus
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
