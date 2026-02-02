import { motion } from "framer-motion";

// Import sponsor logos
import logoBad from "@/assets/logo-bad.png";
import logoBdeac from "@/assets/logo-bdeac.png";
import logoCemac from "@/assets/logo-cemac.png";
import logoCeeac from "@/assets/logo-ceeac.png";
import logoWorldbank from "@/assets/logo-worldbank.png";

const sponsors = [
  { name: "BAD", fullName: "Banque Africaine de Développement", logo: logoBad },
  { name: "BDEAC", fullName: "Banque de Développement des États de l'Afrique Centrale", logo: logoBdeac },
  { name: "CEMAC", fullName: "Communauté Économique et Monétaire de l'Afrique Centrale", logo: logoCemac },
  { name: "CEEAC", fullName: "Communauté Économique des États de l'Afrique Centrale", logo: logoCeeac },
  { name: "World Bank", fullName: "Banque Mondiale", logo: logoWorldbank },
  { name: "AFD", fullName: "Agence Française de Développement", logo: null },
  { name: "IFC", fullName: "Société Financière Internationale", logo: null },
  { name: "MINEPAT", fullName: "Ministère de l'Économie", logo: null },
  { name: "GICAM", fullName: "Groupement Inter-patronal du Cameroun", logo: null },
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

        {/* First Row - Scrolling Left */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: [0, -200 * sponsors.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-44 md:w-52 h-24 md:h-28 rounded-xl bg-card border border-border flex items-center justify-center p-4 transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:scale-105">
                  {sponsor.logo ? (
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.fullName}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="text-center">
                      <p className="font-montserrat font-bold text-foreground text-sm md:text-base group-hover:text-gold transition-colors">
                        {sponsor.name}
                      </p>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-inter mt-1 line-clamp-1">
                        {sponsor.fullName}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="flex overflow-hidden mt-6">
          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: [-200 * sponsors.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {[...duplicatedSponsors].reverse().map((sponsor, index) => (
              <div
                key={`reverse-${sponsor.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-44 md:w-52 h-24 md:h-28 rounded-xl bg-muted border border-border flex items-center justify-center p-4 transition-all duration-300 group-hover:border-forest/50 group-hover:shadow-lg group-hover:scale-105">
                  {sponsor.logo ? (
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.fullName}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="text-center">
                      <p className="font-montserrat font-bold text-foreground text-sm md:text-base group-hover:text-forest transition-colors">
                        {sponsor.name}
                      </p>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-inter mt-1 line-clamp-1">
                        {sponsor.fullName}
                      </p>
                    </div>
                  )}
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