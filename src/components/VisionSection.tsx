import { motion } from "framer-motion";
import { Target, Globe2, Handshake, LineChart } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Carrefour Stratégique",
    description: "Le grand rendez-vous de la sous-région dédié à l'intégration économique et à la compétitivité des entreprises locales.",
  },
  {
    icon: Globe2,
    title: "Conquête du Marché Continental",
    description: "Positionnement des entreprises d'Afrique centrale dans le cadre de la ZLECAF.",
  },
  {
    icon: Handshake,
    title: "Dialogue de Haut Niveau",
    description: "Un espace d'échanges, d'analyses prospectives et de décisions concrètes.",
  },
  {
    icon: LineChart,
    title: "Leviers de Croissance",
    description: "Identification des opportunités et défis pour les entreprises locales, régionales et internationales.",
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="py-24 md:py-32 bg-forest-gradient relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold font-montserrat font-semibold text-sm mb-6">
              VISION DU FORUM
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-black text-primary-foreground mb-6 leading-tight">
              Positionner l'Afrique Centrale
              <br />
              <span className="text-gold">au Cœur du Marché International</span>
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8 font-inter leading-relaxed">
              Le Forum Économique Afrique Centrale s'impose comme le grand carrefour stratégique de la sous-région. Il sert de point de rencontre pour l'intégration économique, la compétitivité des entreprises locales et la conquête du marché continental dans le cadre de la ZLECAF.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10">
                <span className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-primary-foreground font-inter">Zone CEMAC/CEEAC</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-foreground/10">
                <span className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-primary-foreground font-inter">Marché de 1,3 Mrd consommateurs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-lg font-montserrat font-bold text-primary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
