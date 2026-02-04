import { motion } from "framer-motion";
import { Search, Target, Rocket, Megaphone, Handshake, Building2, CreditCard, TrendingUp } from "lucide-react";

const objectives = [
  {
    icon: Search,
    title: "Décrypter",
    description: "Les opportunités et les défis de la ZLECAF pour l'Afrique centrale",
    color: "bg-forest",
  },
  {
    icon: Handshake,
    title: "Faciliter",
    description: "L'accès aux marchés, réduire les barrières tarifaires et non tarifaires",
    color: "bg-gold",
  },
  {
    icon: Target,
    title: "Identifier",
    description: "Les secteurs à fort potentiel d'investissement et de partenariats",
    color: "bg-navy",
  },
  {
    icon: Building2,
    title: "Promouvoir",
    description: "Des plateformes logistiques régionales",
    color: "bg-crimson",
  },
  {
    icon: Rocket,
    title: "Accélérer",
    description: "La croissance des échanges intra-régionaux",
    color: "bg-forest-light",
  },
  {
    icon: CreditCard,
    title: "Consolider",
    description: "Les systèmes de paiement transfrontaliers",
    color: "bg-navy-light",
  },
  {
    icon: Megaphone,
    title: "Intégrer",
    description: "L'intégration effective des PME/industries locales dans les chaînes de valeur continentales",
    color: "bg-gold-dark",
  },
  {
    icon: TrendingUp,
    title: "Capitaliser",
    description: "Sur l'attraction des Investissements Directs Étrangers (IDE)",
    color: "bg-forest",
  },
];

export function ObjectivesSection() {
  return (
    <section className="py-24 md:py-32 bg-navy-gradient relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(45 100% 50% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(45 100% 50% / 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold font-montserrat font-semibold text-sm mb-4">
            OBJECTIFS STRATÉGIQUES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-primary-foreground mb-4">
            Forum 2026
            <br />
            <span className="text-gold">Notre Mission</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-inter">
            Des objectifs clairs pour transformer l'Afrique centrale en hub économique continental.
          </p>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group relative p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${objective.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <objective.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-montserrat font-bold text-gold mb-2">
                {objective.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 font-inter leading-relaxed">
                {objective.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
