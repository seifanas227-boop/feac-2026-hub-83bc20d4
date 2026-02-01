import { motion } from "framer-motion";

const sponsors = [
  { name: "BAD", fullName: "Banque Africaine de Développement" },
  { name: "BDEAC", fullName: "Banque de Développement des États de l'Afrique Centrale" },
  { name: "CEMAC", fullName: "Communauté Économique et Monétaire de l'Afrique Centrale" },
  { name: "CEEAC", fullName: "Communauté Économique des États de l'Afrique Centrale" },
  { name: "World Bank", fullName: "Banque Mondiale" },
  { name: "AFD", fullName: "Agence Française de Développement" },
  { name: "IFC", fullName: "Société Financière Internationale" },
  { name: "MINEPAT", fullName: "Ministère de l'Économie" },
  { name: "MINPMEESA", fullName: "Ministère des PME" },
  { name: "GICAM", fullName: "Groupement Inter-patronal du Cameroun" },
];

// Duplicate for seamless loop
const duplicatedSponsors = [...sponsors, ...sponsors];

export function SponsorsCarousel() {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 container-custom"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-navy/10 text-navy font-montserrat font-semibold text-sm mb-4">
          NOS PARTENAIRES
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-black text-foreground">
          Ils nous font <span className="text-gradient-gold">confiance</span>
        </h2>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: [0, -50 * sponsors.length * 16],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-40 md:w-48 h-20 md:h-24 rounded-xl bg-card border border-border flex items-center justify-center px-4 transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:scale-105">
                  <div className="text-center">
                    <p className="font-montserrat font-bold text-foreground text-sm md:text-base group-hover:text-gold transition-colors">
                      {sponsor.name}
                    </p>
                    <p className="text-[10px] md:text-xs text-muted-foreground font-inter mt-1 line-clamp-1">
                      {sponsor.fullName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Reverse Direction */}
        <div className="flex overflow-hidden mt-6">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: [-50 * sponsors.length * 16, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`reverse-${sponsor.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-40 md:w-48 h-20 md:h-24 rounded-xl bg-muted border border-border flex items-center justify-center px-4 transition-all duration-300 group-hover:border-forest/50 group-hover:shadow-lg group-hover:scale-105">
                  <div className="text-center">
                    <p className="font-montserrat font-bold text-foreground text-sm md:text-base group-hover:text-forest transition-colors">
                      {sponsor.name}
                    </p>
                    <p className="text-[10px] md:text-xs text-muted-foreground font-inter mt-1 line-clamp-1">
                      {sponsor.fullName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-12 container-custom"
      >
        <p className="text-muted-foreground font-inter mb-4">
          Rejoignez nos partenaires et bénéficiez d'une visibilité exceptionnelle
        </p>
        <a
          href="#partners"
          className="inline-flex items-center gap-2 text-gold font-montserrat font-semibold hover:underline"
        >
          Devenir partenaire →
        </a>
      </motion.div>
    </section>
  );
}
